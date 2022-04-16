import React from "react";
import './Home.css';
import Body from "../body/Body";
import Footer from "../footer/Footer";
import Header from "../header/Header";

const Home = () => {
    return (
        <div className="home">
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
