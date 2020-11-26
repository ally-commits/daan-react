import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import styles from './ImageSlider.module.css'

import img1 from '../../../../assets/img/img1.jpg'
import img2 from '../../../../assets/img/img2.jpg'
import img3 from '../../../../assets/img/img3.jpg'
import img4 from '../../../../assets/img/img4.jpg'

var ImageSlider = () => {
    return (
        <Carousel showArrows={true} showIndicators={false} showThumbs={false} showStatus={false}>
            <div className={styles.imgContainer}>
                <img src={img1} /> 
            </div>
            <div className={styles.imgContainer}>
                <img src={img2} /> 
            </div>
            <div className={styles.imgContainer}>
                <img src={img3} /> 
            </div>
            <div className={styles.imgContainer}>
                <img src={img4} /> 
            </div> 
        </Carousel>
    );
};
export default ImageSlider;