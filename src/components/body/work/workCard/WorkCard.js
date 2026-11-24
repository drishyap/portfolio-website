import moment from "moment";
import "./WorkCard.css";

const WorkCard = ({ item }) => {
   const { company, dateJoining, dateEnd, work } = item;

   const startMoment = moment(dateJoining, "DD-MM-YYYY", true);
   const endMoment = dateEnd === "Present"
      ? moment()
      : moment(dateEnd, "DD-MM-YYYY", true);
   const years = endMoment.diff(startMoment, "years");
   const months = endMoment.diff(
      startMoment.clone().add(years, "years"),
      "months"
   );
   const duration = [
      years && `${years} ${years === 1 ? "year" : "years"}`,
      months && `${months} ${months === 1 ? "month" : "months"}`,
   ].filter(Boolean).join(" ") || "Less than a month";

   return (
      <article className="work-card">
         {/* <img src={companyLogo} className="work-logo" alt="" /> */}
         <div className="work-info">
            <div><h3 className="company-name">{company}</h3><p className="designation">{item.designation}</p></div>
            <div className="work-dates">
               <label>{dateJoining}</label> — <label>{dateEnd}</label>
               <span className="work-duration"> · {duration}</span>
            </div>
            <div className="work-desc">
               <p>{work}</p>
            </div>
         </div>
      </article>
   );
};

export default WorkCard;
