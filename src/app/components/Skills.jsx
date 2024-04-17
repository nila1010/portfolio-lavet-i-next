import React from "react";
import { skilldata } from "../data/skilldata";
import Skillindhold from "./Skillindhold";

function Skills() {
  return (
    <section id="skills">
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
