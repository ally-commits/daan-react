import React from 'react';
import styles from './Trending.module.css'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import ContentSlider from './ContentSlider/ContentSlider';

const Trending = () => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <h4 className={styles.head}>Trending Fundraisers</h4>

                <div className={styles.infoSlider}>
                    <ContentSlider />
                </div>
            </div>
        </div>
    )
}

export default Trending;