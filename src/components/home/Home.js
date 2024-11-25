import React, { useEffect, useState } from "react";
import Body from "../body/Body";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import "./Home.css";

const Home = () => {
   const [isVisible, setIsVisible] = useState(false);

   useEffect(() => {
      // Function to handle scroll event
      const handleScroll = () => {
         // If the page is scrolled beyond a certain threshold, set isVisible to true
         const scrollTop = window.scrollY;
         if (scrollTop > 200) {
            setIsVisible(true);
         } else {
            setIsVisible(false);
         }
      };

      // Add scroll event listener when component mounts
      window.addEventListener("scroll", handleScroll);

      // Remove scroll event listener when component unmounts
      return () => {
         window.removeEventListener("scroll", handleScroll);
      };
   }, []);

   // Function to scroll to top
   const scrollToTop = () => {
      window.scrollTo({
         top: 0,
         behavior: "smooth",
      });
   };
   return (
      <div className="home">
         <div
            onClick={scrollToTop}
            id="scrollToTopBtn"
            title="Go to top"
            className={
               isVisible ? "scrollToTopBtnVisible" : "scrollToTopBtn"
            }
         >
            Scroll to top
         </div>
         <div>
            <Header />
         </div>
         <div>
            <Body />
         </div>
         <div>
            <Footer />
         </div>
      </div>
   );
};

export default Home;
