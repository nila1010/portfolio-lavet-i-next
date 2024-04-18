"use client";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { skilldata } from "../data/skilldata";
import Skillindhold from "./Skillindhold";

gsap.registerPlugin(ScrollTrigger);

function Skills() {
  useGSAP(() => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#skills",
        start: "top 600",
        end: "top+=500 center",
        scrub: true,
        markers: true,
      },
    });

    tl.to("#skills", { opacity: 1 });
  });
  return (
    <section id="skills" className="opacity-0">
      <h2 className="font-bold text-5xl lg:text-7xl mb-10">Skills</h2>
      <article className="grid grid-cols-[repeat(auto-fill,_minmax(0,_300px))] gap-8">
        {skilldata.map((skill) => {
          return <Skillindhold key={skill.title} {...skill} />;
        })}
      </article>
    </section>
  );
}

export default Skills;
