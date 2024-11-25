import React from "react";
import "./Body.css";
import About from "./about/About";
import Contact from "./contact/Contact";
import Projects from "./projects/Projects";
import Skills from "./skills/Skills";
import Work from "./work/Work";

const Body = () => {
   return (
      <div className="body">
         <section id="about">
            <About />
         </section>
         <section id="projects">
            <Projects />
         </section>
         <section id="skills">
            <Skills />
         </section>
         <section id="work">
            <Work />
         </section>
         <section id="contact">
            <Contact />
         </section>
      </div>
   );
};

export default Body;
