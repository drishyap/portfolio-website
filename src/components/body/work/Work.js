import React from "react";
import { WorkData } from "../../data/Work";
import Seperator from "../../social/seperator/Seperator";
import "./Work.css";
import WorkCard from "./workCard/WorkCard";

const Work = () => {
   const data = WorkData;

   return (
      <div className="work">
         <Seperator />
         <div className="section-heading"><label className="section-title">Experience</label><p>Building on the web since 2022.</p></div>
         <div className="work-list">
            {data.map((item) => {
               return <WorkCard key={item.company} item={item} />;
            })}
         </div>
      </div>
   );
};

export default Work;
