import React from "react";
import "./About.css";

const About = () => {
    return (
        <div className="about">
            <div className="about-top">
                <div className="about-info">
                    Hello There 👋, I am
                    <br />
                    <span className='info-name'>Drishya Poudel.</span>
                    <br />I love experimenting with the web.
                </div>
                <div className="about-img">
                  <img src={require('../../../assets/coding.png')} className='picture' />
                </div>
            </div>
        </div>
    );
};

export default About;
