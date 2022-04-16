import React from 'react';
import './Projects.css';
import {ProjectsData} from '../../data/Projects'
import ProjectCard from './projectCard/ProjectCard';
import Seperator from '../../social/seperator/Seperator';

const Projects = () => {
  const data = ProjectsData;

  return (
    <div className="projects">
      <Seperator/>
      <label className='section-title'>Projects</label>
      <div>
        {data.map((project) => {
          return <ProjectCard project={project}/>
        })}
      </div>
    </div>
  )
}

export default Projects