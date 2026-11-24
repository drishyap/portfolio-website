import React from "react";
import { ProjectsData } from "../../data/Projects";
import Seperator from "../../social/seperator/Seperator";
import ProjectCard from "./projectCard/ProjectCard";
import "./Projects.css";

const Projects = () => {
   const data = ProjectsData;

   return (
      <div className="projects">
         <Seperator />
         <div className="section-heading"><h2 className="section-title">Production platforms</h2><p>Real-world production systems.</p></div>
         <div>
            {data.filter((project) => ![8, 9].includes(project.id)).map((project) => {
               return <ProjectCard key={`${project.id}-${project.title}`} project={project} />;
            })}
         </div>
      </div>
   );
};

export default Projects;
