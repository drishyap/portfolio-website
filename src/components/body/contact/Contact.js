import React from "react";
import Seperator from "../../social/seperator/Seperator";
import Social from "../../social/Social";
import "./Contact.css";

const Contact = () => {
   return (
      <div className="contact">
         <Seperator />
         <label className="section-title">Contact</label>
         <div className="contact-container">
            <div className="contact-left">
               <p>
                  Want to get in touch? Contact me on any of the
                  platform
               </p>
               <Social />
            </div>
            {/* <div className="download">
               <a
                  download
                  href={require("../../../assets/Drishya_Poudel_CV.pdf")}
               >
                  <i className="fi-rr-cloud-download download-icon"></i>
                  Download Resume
               </a>
            </div> */}
         </div>
      </div>
   );
};

export default Contact;
