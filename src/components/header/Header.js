import { useEffect, useState } from "react";
import "./Header.css";
import Mobile from "./mobile/Mobile";
import Web from "./web/Web";

function Header() {
   const [isOpen, setIsOpen] = useState(false);
   const handleLogoClick = () => {
      window.scrollTo(0, 0);
   };
   useEffect(() => {
      const handleScroll = () => setIsOpen(false);
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
   }, []);

   useEffect(() => {
      // Lock body scroll when sidebar is open
      document.body.style.overflow = isOpen ? "hidden" : "";
      return () => {
         document.body.style.overflow = "";
      };
   }, [isOpen]);
   useEffect(() => {
      // Close sidebar on window resize to avoid inconsistent states
      const handleResize = () => setIsOpen(false);
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
   }, []);
   return (
      <div className="header">
         <div onClick={handleLogoClick} className="logo">
            Drishya Poudel
         </div>
         <div className="menu">
            <div className="web-menu">
               <Web />
            </div>

            <div className="mobile-menu">
               <div onClick={() => setIsOpen(!isOpen)}>
                  <i class="fi-rr-apps menu-icon"></i>
               </div>
               <>
                  <div
                     className={`mobile-overlay ${isOpen ? "open" : ""}`}
                     onClick={() => setIsOpen(false)}
                     aria-hidden="true"
                  />
                  <Mobile isOpen={isOpen} setIsOpen={setIsOpen} />
               </>
            </div>
         </div>
      </div>
   );
}

export default Header;
