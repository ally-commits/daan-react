import React from 'react'
import bannerBg from '../../../assets/img/banner-bg.png'
import styles from './Banner.module.css'

const Banner = () => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.leftContent}>
                    <img src={bannerBg} alt=""/>
                </div>
                <div className={styles.rightContent}>
                    <h4><span>DAAN</span> ZERO platform fee policy will ensure MORE funds for you. </h4>
                    <h1>Come, join our team if the idea of making a difference makes you tick.</h1>

                    <button>Donate Now</button>
                </div>
            </div>
        </div>
    )
}
export default Banner;