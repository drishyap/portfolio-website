import "./About.css";
import { FiArrowUpRight } from "react-icons/fi";

const About = () => {
   return (
      <div className="about">
         <div className="about-top">
            <div className="about-info">
               <p className="eyebrow">Frontend developer · Nepal</p>
               <h1>Interfaces that feel<br /><em>considered.</em></h1>
               <p className="hero-copy">I’m Drishya Poudel. I build robust, responsive web experiences for products that need to work beautifully in the real world.</p>
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
