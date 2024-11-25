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
         <label className="section-title">Live Projects</label>
         <div>
            {data.map((project) => {
               return <ProjectCard project={project} />;
            })}
         </div>
      </div>
   );
};

export default Projects;
