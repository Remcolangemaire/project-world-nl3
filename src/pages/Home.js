import React from "react";
import './home.scss';
import HomeMap from "../components/homeMap/HomeMap";
import Front from "../components/frontPage/Front";
import Footer from '../components/footer/Footer'

const Home = () => {
    return (
        <div className="hero-container">
            <Front/>
            <HomeMap/>
            <Footer/>
        </div>
    );
};

export default Home;

