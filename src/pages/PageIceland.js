import React from "react";
import FotoRight from "../components/landPage/FotoRight";
import imgJ from '../images/IMG_9761.jpg'
import './pageIceland.scss'

const PageOne = () => {
    return (
        <div className="iceland-hero-container">
            <FotoRight
            img= {imgJ}
            title="Remco "
            description="Dit is wat boring text"
            />
        </div>

    )
};

export default PageOne;
