"use client";
import React, { useState } from "react";
import ContentPortfolio from "./ContentPortfolio";
import { portfoliodata } from "../data/portfoliodata";
import Tabelementer from "./Tabelementer";

function Portfolio() {
  const [tabStatus, setTabStatus] = useState("Consulting");

  return (
    <section id="portfolio">
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
