import React from "react";
import "./WorkCard.css";

const WorkCard = ({ item }) => {
    const {
        companyLogo,
        company,
        designation,
        dateJoining,
        dateEnd,
        work,
    } = item;

    return(
        <div className="work-card">
            <img src={companyLogo} className='work-logo' />
            <div className="work-info">
                <label className="company-name">{company}</label>
                <div className='work-dates'>
                    <label>{dateJoining}</label> - <label>{dateEnd}</label>
                </div>
                <div className="work-desc">
                    <p>{work}</p>
                </div>
            </div>
        </div>
    )
};

export default WorkCard;
