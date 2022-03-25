import React from "react";
import './home.scss';
import HomeMap from "../components/homeMap/HomeMap";
import AboutUs from "../components/aboutUs/AboutUs";

const Home = () => {
    return (
        <div className="hero-container">
            <HomeMap/>
            <AboutUs/>
        </div>
    );
};

export default Home;

