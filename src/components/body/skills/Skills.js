import React from "react";
import "./Skills.css";
import Seperator from "../../social/seperator/Seperator";
import { SkillsData } from "../../data/Skills";
import SkillCard from "./skillCard/SkillCard";

const Skills = () => {
    const data = SkillsData;

    return (
        <div className="skills">
            <Seperator />
            <div className="section-heading"><label className="section-title">Toolbox</label><p>Things I use to ship polished frontend work.</p></div>
            <div className="skills-container">
                {data.map((item) => {
                    return (
                        <div className="skills-section" key={item.type}>
                            <label className="skills-section-title">
                                {item.type}
                            </label>
                            <div className="skills-list">
                                {item.list.map((skill) => {
                                    return (
                                        <SkillCard key={skill.name} skill={skill} />
                                    );
                                })}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Skills;
