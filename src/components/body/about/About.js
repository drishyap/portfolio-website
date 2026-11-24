import "./About.css";
import { FiArrowUpRight } from "react-icons/fi";

const About = () => {
   return (
      <div className="about">
         <div className="about-top">
            <div className="about-info">
               <p className="eyebrow">Frontend developer · Nepal</p>
               <h1>Building thoughtful<br />things for the <em>web.</em></h1>
               <p className="hero-copy">I’m Drishya Poudel, a frontend developer who enjoys turning ideas into fast, thoughtful web experiences that people genuinely like using.</p>
               <div className="hero-actions">
                  <a href="#projects" className="button button-primary">View selected work <FiArrowUpRight /></a>
                  <a href="#contact" className="button button-quiet">Let’s talk</a>
               </div>
               <p className="hero-note">React · Next.js · TypeScript · UI engineering</p>
            </div>
            <div className="about-img">
               <img
                  src={require("../../../assets/coding.png")}
                  className="picture"
                  alt="Developer workspace illustration"
               />
            </div>
         </div>
      </div>
   );
};

export default About;
