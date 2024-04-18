"use client";
import Burger from "./Burger";
import LinkNavigation from "./Linknavigation";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navigation() {
  const [width, setWidth] = useState(window.innerWidth);
  console.log(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    console.log(width);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <nav className="relative flex justify-between items-center px-8 md:px-16 py-8">
      <Link prefetch={false} href="/">
        <h1 className="text-6xl font-bold first-letter:text-customorange">Portfolio.</h1>
      </Link>

      <Burger />
    </nav>
  );
}
