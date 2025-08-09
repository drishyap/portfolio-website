import "./About.css";

const About = () => {
   return (
      <div className="about">
         <div className="about-top">
            <div className="about-info">
               Hello There 👋, I am a
               {/* <span className="info-name">Drishya Poudel.</span> */}
               <br />
               <span style={{ fontWeight: "700", fontSize: "30px" }}>
                  {" "}
                  Front-End Developer
               </span>{" "}
               and
               <br />I love experimenting with the web.
            </div>
            <div className="about-img">
               <img
                  src={require("../../../assets/coding.png")}
                  className="picture"
                  alt=""
               />
            </div>
         </div>
      </div>
   );
};

export default About;
