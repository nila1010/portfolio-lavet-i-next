"use client";
import { useState } from "react";
import ContentPortfolio from "./ContentPortfolio";
import { portfoliodata } from "../data/portfoliodata";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Tabelementer from "./Tabelementer";
gsap.registerPlugin(ScrollTrigger);

function Portfolio() {
  useGSAP(() => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".port",
        start: "top 600",
        end: "center center",
        scrub: true,
      },
    });

    tl.to(".port", { translateX: 0 });
  });
  const [tabStatus, setTabStatus] = useState("Consulting");

  return (
    <section id="portfolio" className="port translate-x-[-200%]">
      <h2 className="font-bold text-5xl lg:text-7xl mb-10">Portfolio</h2>
      <article className="outline overflow-hidden">
        <ul className="flex flex-wrap justify-between text-center text-lg">
          {portfoliodata.map((one) => {
            return <Tabelementer setTabStatus={setTabStatus} key={one.title} title={one.title} />;
          })}
        </ul>
        {portfoliodata.map((one) => {
          return <ContentPortfolio key={one.heading} activetab={tabStatus} data={one} />;
        })}
      </article>
    </section>
  );
}

export default Portfolio;
