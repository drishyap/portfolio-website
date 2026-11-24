import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import "./ProjectCard.css";

const ProjectCard = ({ project }) => {
   const { image, demo, about, title } = project;
   return (
      <article className="project-card">
         <div className="project-info">
            <h3 className="project-title">{title}</h3>
            <div className="project-links">
               {demo && (
                  <a
                     href={demo}
                     className="project-link"
                     target="_blank"
                     rel="noreferrer"
                  >
                     <div className="link-button">
                        Visit site <FiArrowUpRight />
                     </div>
                  </a>
               )}
            </div>
            <p>{about}</p>
         </div>

         <a href={demo} target="_blank" rel="noreferrer" className="project-visual"><img src={image} alt={`${title} website preview`} className="project-photo" /></a>
      </article>
   );
};

export default ProjectCard;
