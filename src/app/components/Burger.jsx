"use client";
import React, { useState } from "react";
import Hamburger from "hamburger-react";
import LinkNavigation from "./Linknavigation";

function Burger() {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      {isOpen && (
        <ul className="absolute top-[70%] right-0 bg-darkblue z-10 px-10 py-6 grid gap-5 text-2xl font-thin animate-bouncein outline rounded-s-lg">
          <LinkNavigation path="#about">Om mig</LinkNavigation>
          <LinkNavigation path="#skills">Skills</LinkNavigation>
          <LinkNavigation path="#portfolio">Portfolio</LinkNavigation>
          <LinkNavigation path="https://github.com/nila1010">Github</LinkNavigation>
          <LinkNavigation path="#contact">Kontakt</LinkNavigation>
        </ul>
      )}
      <Hamburger toggled={isOpen} toggle={setOpen} />
    </>
  );
}

export default Burger;
