"use client";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Intro() {
  useGSAP(() => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".slideintext",
        start: "top 200",
        end: "top",
        scrub: true,
      },
    });
    let tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".infotext",
        start: "top 400",
        end: "top",
        scrub: true,
      },
    });

    tl.to(".slideintext", { translateX: 600 });
    tl2.to(".infotext", { translateX: -600 });

    gsap.to(".text1", {
      scrollTrigger: ".text1",
      x: 0,
      delay: 0.5,
      duration: 1,
      ease: "power3.out",
    });
    gsap.to(".text2", {
      scrollTrigger: ".text2",
      x: 0,
      delay: 0.7,
      duration: 1,
      ease: "power3.out",
    });
    gsap.to(".text3", {
      scrollTrigger: ".text3",
      x: 0,
      delay: 0.9,
      duration: 1,
      ease: "power3.out",
    });
  });
  return (
    <section className="block mt-16 gap-4 md:grid grid-cols-[3fr_2fr] ">
      <div className="slideintext text-right font-bold text-customorange pb-16 md:pb-32 text-6xl md:text-left md:order-1 lg:text-7xl ">
        <p className="text1 translate-x-[200%]">Passion</p>
        <p className="text2 translate-x-[200%]">Simple</p>
        <p className="text3 translate-x-[200%]">Excitment</p>
      </div>
      <div className="infotext self-end">
        <h2 className="text-lg mb-1 sm:mb-3 sm:text-2xl lg:text-3xl ">Frontend</h2>
        <h3 className="text-2xl font-bold sm:text-4xl lg:text-5xl before:content-['Nicolai_'] before:text-customorange">Fisker Langkilde</h3>
        <h3 className="text-1xl sm:text-2xl lg:text-3xl">Multimediedesigner studerende</h3>
      </div>
    </section>
  );
}
