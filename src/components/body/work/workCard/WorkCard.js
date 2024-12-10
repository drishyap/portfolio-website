import moment from "moment";
import React from "react";
import "./WorkCard.css";

const WorkCard = ({ item }) => {
   const { companyLogo, company, dateJoining, dateEnd, work } = item;
   const startDate = item?.dateJoining; // Start date in YYYY-MM-DD format
   const today = moment(); // Today's date

   // Calculate the difference in years and months
   const years = today.diff(moment(startDate), "years");
   const months = today.diff(
      moment(startDate).add(years, "years"),
      "months"
   );

   console.log({ years });
   return (
      <div className="work-card">
         {/* <img src={companyLogo} className="work-logo" alt="" /> */}
         <div className="work-info">
            <label className="company-name">{company}</label>
            <div className="work-dates">
               <label>{dateJoining}</label> -{" "}
               <label>
                  {dateEnd}({years !== 0 && `${years} Years and `}
                  {months} Months)
               </label>
            </div>
            <div className="work-desc">
               <p>{work}</p>
            </div>
         </div>
      </div>
   );
};

export default WorkCard;
