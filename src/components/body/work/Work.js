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
         <label className="section-title">Work</label>
         <div className="work-list">
            {data.map((item) => {
               return <WorkCard item={item} />;
            })}
         </div>
      </div>
   );
};

export default Work;
