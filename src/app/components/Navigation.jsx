"use client";
import Burger from "./Burger";
import LinkNavigation from "./Linknavigation";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";

export default function Navigation() {
  const [width, setWidth] = useState(861);

  useEffect(() => {
    setWidth(window.innerWidth);
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <nav className="relative flex justify-between items-center px-8 md:px-16 py-8">
      <Link prefetch={false} href="/">
        <h1 className="text-5xl sm:text-6xl font-bold first-letter:text-customorange">Portfolio.</h1>
      </Link>
      {width > 860 ? (
        <ul className="flex bg-darkblue gap-5 text-2xl font-thin">
          <LinkNavigation path="#about">Om mig</LinkNavigation>
          <LinkNavigation path="#skills">Skills</LinkNavigation>
          <LinkNavigation path="#portfolio">Portfolio</LinkNavigation>
          <LinkNavigation path="https://github.com/nila1010">Github</LinkNavigation>
          <LinkNavigation path="#contact">Kontakt</LinkNavigation>
        </ul>
      ) : (
        <Burger />
      )}
    </nav>
  );
}
