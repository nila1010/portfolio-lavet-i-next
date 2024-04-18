"use client";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

import Image from "next/image";
export default function Ommig() {
  useGSAP(() => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".abouttext",
        start: "top 700",
        end: "center center",
        scrub: true,
      },
    });
    let tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".imgabout",
        start: "top 600",
        end: "center 200",
        scrub: true,
      },
    });

    tl.to(".abouttext", { translateX: 0 });
    tl2.to(".imgabout", { opacity: 1 });
  });

  return (
    <>
      <section id="about" className="block md:flex gap-10">
        <div className="imgabout opacity-0">
          <Image priority={true} src={"/nicolai.webp"} width={478} height={636} alt="Profilbillede af Nicolai" style={{ float: "left", objectFit: "contain", alignSelf: "start", maxWidth: "50vw", marginInlineEnd: "4cqi" }} />
        </div>
        <article className="abouttext translate-x-[200%] self-center max-w-prose shrink-[2]">
          <h2 className="text-5xl font-bold lg:text-7xl after:content-['_mig'] after:text-customorange">Om</h2>
          <div className="mt-6 font-thin">
            <p className="mb-4">Jeg er en passioneret Frontend Developer, som brænder for at skabe brugercentreret og bæredygtige løsninger ved hjælp af mine færdigheder inden for HTML, CSS, JavaScript, Databaser, Astro og React/Next.js.</p>
            <p className="mb-4">Jeg har en solid forståelse for HTML og CSS og erfaring med at omsætte designs til kode. Min erfaring med JavaScript og React/Next.js har gjort mig i stand til at skabe dynamiske og interaktive brugeroplevelser.</p>
            <p className="mb-4">Jeg har studiejob på KEA som lektiehjælp til primært at hjælpe de studerende med kodnings udfordringer, som giver mig erfaring i at sætte mig ind i andres kode og tanker og løse deres problemer.</p>
            <p className="mb-4">Jeg har i 4 år arbejdet som event- og salgsledelse. Som har medført jeg sætter en stor ære i at være serviceminded, professionel, struktureret, samtidig med at kunne håndtere mange projekter samtidig. Arbejder godt i teams men også individuelt.</p>
            <p className="mb-4">Jeg håber at få muligheden for at lære en masse hos jer og bidrage aktivt til projekter. Jeg er ivrig efter at udvide mine færdigheder og erfaringer gennem praktisk arbejde under vejledning.</p>
          </div>
        </article>
      </section>
    </>
  );
}
