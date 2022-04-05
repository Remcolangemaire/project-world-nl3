import React from "react";
import FotoRight from "../components/landPage/FotoRight";
import './pageIceland.scss'
import FotoLeft from "../components/landPage/FotoLeft";
import FotoVerRight from "../components/landPage/FotoVerRight";
import imgA from '../images/IMG_0557.jpg'
import imgG from '../images/DJI_0040.jpg'
import imgJ from '../images/IMG_9761.jpg'
import imgH from '../images/DSC_8988-2.jpg'
const PageOne = () => {
    return (
        <div className="iceland-hero-container content-container">
            <div className=" componenten-container">
                <FotoRight
                img1= {imgG}
                img2= {imgH}
                alt="hoi"
                title="Kopstuk "
                description="
                Lorem ipsum dolor sit amet. Qui illo sunt ut consequatur quia sed magnam internos ab consequatur rerum et ullam culpa ut vitae quibusdam id harum earum. Aut unde debitis ex quia maiores ut ipsum consequatur aut totam temporibus. Hic consequatur nihil ut obcaecati odit aut autem praesentium. Ut blanditiis rerum et placeat autem qui minus veritatis rem veritatis quam qui iste blanditiis qui perferendis sunt qui quia obcaecati.

                Et quia veritatis et Quis laboriosam et repudiandae delectus et quia totam non quod perferendis ex dolores omnis? Et incidunt illum eum harum deleniti et eius suscipit sed neque enim aut fugit aliquid.
                
                Rem ipsum sint sed doloremque repudiandae 33 soluta corporis et esse distinctio id nisi ipsam eos fuga velit et aliquam velit. Rem doloribus iusto sed earum galisum et quis galisum vel repellat voluptatem. Aut eligendi blanditiis ut ducimus animi aut voluptatum quis et corrupti dicta est totam rerum id optio voluptatem? Aut assumenda necessitatibus et animi architecto est soluta atque aut omnis odio rem dolore explicabo."
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
                Lorem ipsum dolor sit amet. Qui illo sunt ut consequatur quia sed magnam internos ab consequatur rerum et ullam culpa ut vitae quibusdam id harum earum. Aut unde debitis ex quia maiores ut ipsum consequatur aut totam temporibus. Hic consequatur nihil ut obcaecati odit aut autem praesentium. Ut blanditiis rerum et placeat autem qui minus veritatis rem veritatis quam qui iste blanditiis qui perferendis sunt qui quia obcaecati.

                Et quia veritatis et Quis laboriosam et repudiandae delectus et quia totam non quod perferendis ex dolores omnis? Et incidunt illum eum harum deleniti et eius suscipit sed neque enim aut fugit aliquid.
                
                Rem ipsum sint sed doloremque repudiandae 33 soluta corporis et esse distinctio id nisi ipsam eos fuga velit et aliquam velit. Rem doloribus iusto sed earum galisum et quis galisum vel repellat voluptatem. Aut eligendi blanditiis ut ducimus animi aut voluptatum quis et corrupti dicta est totam rerum id optio voluptatem? Aut assumenda necessitatibus et animi architecto est soluta atque aut omnis odio rem dolore explicabo."
                />
            </div>
            <hr></hr>
            <div className=" componenten-container">
                <FotoVerRight
                img1= {imgJ}
                img2= {imgA}
                alt="hoi"
                title1="Kopstuk "
                description1="
                Lorem ipsum dolor sit amet. Qui illo sunt ut consequatur quia sed magnam internos ab consequatur rerum et ullam culpa ut vitae quibusdam id harum earum. Aut unde debitis ex quia maiores ut ipsum consequatur aut totam temporibus. Hic consequatur nihil ut obcaecati odit aut autem praesentium. Ut blanditiis rerum et placeat autem qui minus veritatis rem veritatis quam qui iste blanditiis qui perferendis sunt qui quia obcaecati.

                Et quia veritatis et Quis laboriosam et repudiandae delectus et quia totam non quod perferendis ex dolores omnis? Et incidunt illum eum harum deleniti et eius suscipit sed neque enim aut fugit aliquid.
                
                Rem ipsum sint sed doloremque repudiandae 33 soluta corporis et esse distinctio id nisi ipsam eos fuga velit et aliquam velit. Rem doloribus iusto sed earum galisum et quis galisum vel repellat voluptatem. Aut eligendi blanditiis ut ducimus animi aut voluptatum quis et corrupti dicta est totam rerum id optio voluptatem? Aut assumenda necessitatibus et animi architecto est soluta atque aut omnis odio rem dolore explicabo."
                title2="Kopstuk "
                description2="
                Lorem ipsum dolor sit amet. Qui illo sunt ut consequatur quia sed magnam internos ab consequatur rerum et ullam culpa ut vitae quibusdam id harum earum. Aut unde debitis ex quia maiores ut ipsum consequatur aut totam temporibus. Hic consequatur nihil ut obcaecati odit aut autem praesentium. Ut blanditiis rerum et placeat autem qui minus veritatis rem veritatis quam qui iste blanditiis qui perferendis sunt qui quia obcaecati.

                Et quia veritatis et Quis laboriosam et repudiandae delectus et quia totam non quod perferendis ex dolores omnis? Et incidunt illum eum harum deleniti et eius suscipit sed neque enim aut fugit aliquid.
                
                Rem ipsum sint sed doloremque repudiandae 33 soluta corporis et esse distinctio id nisi ipsam eos fuga velit et aliquam velit. Rem doloribus iusto sed earum galisum et quis galisum vel repellat voluptatem. Aut eligendi blanditiis ut ducimus animi aut voluptatum quis et corrupti dicta est totam rerum id optio voluptatem? Aut assumenda necessitatibus et animi architecto est soluta atque aut omnis odio rem dolore explicabo."
                />
            </div>
        </div>

    )
};

export default PageOne;