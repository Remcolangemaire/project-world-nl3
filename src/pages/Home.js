import React from "react";
import HomeMap from "../components/homeMap/HomeMap";
import Front from "../components/frontPage/Front";

const Home = () => {
    return (
        <div className="hero-container">
            <Front/>
            <HomeMap/>
        </div>
    );
};

export default Home;

