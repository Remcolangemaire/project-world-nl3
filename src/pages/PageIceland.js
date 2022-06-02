import React from "react";
import FotoRight from "../components/landPage/FotoRight";
import './pageIceland.scss'
import FotoLeft from "../components/landPage/FotoLeft";
import FotoVerRight from "../components/landPage/FotoVerRight";
import FotoVerLeft from "../components/landPage/FotoVerLeft";
import imgA from '../images/IMG_0557.jpg'
import imgG from '../images/DJI_0040.jpg'
import imgH from '../images/DSC_8988-2.jpg'
import imgJ from '../images/IMG_0557.jpg'
const PageOne = () => {
    return (
        <div className="iceland-contentcontainer">
            <div className=" componenten-container">
                <FotoRight
                img1= {imgG}
                img2= {imgH}
                alt="hoi"
                title="Kopstuk "
                description="
                Lorem ipsum dolor sit amet. Qui illo sunt ut consequatur quia svitae quibusdaiores ut ipsum consequatur aut totam temporibus. Hic consequatur nihil ut obcaecati odit aut autem praesentium."
                />
            </div>
            <hr></hr>
            <div className=" componenten-container">
                <FotoLeft
                img1= {imgG}
                img2= {imgH}
                alt="hoi"
                title="Kopstuk "
                description="
                Lorem ipsum dolor sit amet. Qui illo sunt ut consequatur quia svitae quibusdaiores ut ipsum consequatur aut totam temporibus. Hic consequatur nihil ut obcaecati odit aut autem praesentium."
                />
            </div>
            <hr></hr>
            <div className=" componenten-container">
                <FotoVerRight
                img1= {imgJ}
                img2= {imgJ}
                alt="hoi"
                title1="Kopstuk "
                description1="
                Lorem ipsum dolor sit amet. Qui illo sunt ut consequatur quia svitae quibusdaiores ut ipsum consequatur aut totam temporibus. Hic consequatur nihil ut obcaecati odit aut autem praesentium."
                title2="Kopstuk "
                description2="
                Lorem ipsum dolor sit amet. Qui illo sunt ut consequatur quia svitae quibusdaiores ut ipsum consequatur aut totam temporibus. Hic consequatur nihil ut obcaecati odit aut autem praesentium."
                />
            </div>
            <hr></hr>
            <div className=" componenten-container">
                <FotoVerLeft
                img1= {imgJ}
                img2= {imgJ}
                alt="hoi"
                title1="Kopstuk "
                description1="
                Lorem ipsum dolor sit amet. Qui illo sunt ut consequatur quia svitae quibusdaiores ut ipsum consequatur aut totam temporibus. Hic consequatur nihil ut obcaecati odit aut autem praesentium."
                title2="Kopstuk "
                description2="
                Lorem ipsum dolor sit amet. Qui illo sunt ut consequatur quia svitae quibusdaiores ut ipsum consequatur aut totam temporibus. Hic consequatur nihil ut obcaecati odit aut autem praesentium."
                />
            </div>
        </div>
    )
};

export default PageOne;