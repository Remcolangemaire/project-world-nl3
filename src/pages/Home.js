import React from "react";
import './home.scss';
import HomeMap from "../components/homeMap/HomeMap";
import AboutUs from "../components/aboutUs/AboutUs";
import Front from "../components/frontPage/Front";

const Home = () => {
    return (
        <div className="hero-container">
            <Front/>
            <HomeMap/>
            <AboutUs/>
        </div>
    );
};

export default Home;

