import Hero from "./herosection/hero";
import About from "./about/about"
import Skill from "./skills/skill";
import Project from "./projects/project";
import Contact from "./contact/contact";
import Footer from "./footer/footer";


export default function Home() {
  return (
  <><Hero/>
  <About/>
  <Skill/>
  <Project/>
  <Contact/>
  <Footer/></>
  );

}
