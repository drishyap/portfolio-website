import React from "react";
import "./ProjectCard.css";

const ProjectCard = ({ project }) => {
    const { image, id, demo, about, title, github } = project;
    return (
        <div className="project-card">
            <div className="project-info">
                <label className="project-title">{title}</label>
                <div className="project-links">
                    {demo && (
                        <a
                            href={demo}
                            className="project-link"
                            target="_blank"
                        >
                            <div className="link-button">
                                <i className="fi-rr-globe"></i>Demo
                            </div>
                        </a>
                    )}
                    {github && (
                        <a
                            href={github}
                            className="project-link"
                            target="_blank"
                        >
                            <div className="link-button">
                                <i class="devicon-github-original colored"></i>
                                Github
                            </div>
                        </a>
                    )}
                </div>
                <p>{about}</p>
            </div>
            
            <img src={image} alt="" className='project-photo'/>
        </div>
    );
};

export default ProjectCard;
