import Contact from "./components/Contact";
import Intro from "./components/Intro";
import Ommig from "./components/Ommig";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";

export default function Home() {
  return (
    <>
      <Intro />
      <Ommig />
      <Skills />
      <Portfolio />
      <Contact />
    </>
  );
}
