import React from 'react'
import styles from './Stories.module.css'

import ContentSlider from './ContentSlider/ContentSlider';
import storyImg from '../../../assets/img/story.png'

import icon6 from '../../../assets/svg/icon6.svg'
import icon7 from '../../../assets/svg/icon7.svg'
import icon8 from '../../../assets/svg/icon8.svg'
import icon9 from '../../../assets/svg/icon9.svg'
import icon10 from '../../../assets/svg/icon10.svg'

const Stories = () => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.leftContent}>
                    <img src={storyImg} alt=""/>
                </div>
                <div className={styles.rightContent}>
                    <ContentSlider />
                </div>
            </div>

            <div className={styles.contentInfo}>
                <div className={styles.boxes}>
                    <div className={styles.box}>
                        <img src={icon6} alt=""/>
                        <div className={styles.boxContent}>
                            <h4>₹500 Crs+</h4>
                            <p>Ideas Raised Funds</p>
                        </div>
                    </div>
                    <div className={styles.box}>
                        <img src={icon7} alt=""/>
                        <div className={styles.boxContent}>
                            <h4>24000</h4>
                            <p>Number of Donors</p>
                        </div>
                    </div>
                    <div className={styles.box}>
                        <img src={icon8} alt=""/>
                        <div className={styles.boxContent}>
                            <h4>2.8 Lacs+</h4>
                            <p>Projects Completed</p>
                        </div>
                    </div>
                    <div className={styles.box}>
                        <img src={icon9} alt=""/>
                        <div className={styles.boxContent}>
                            <h4>2.8 Lacs+</h4>
                            <p>Happy Repeat Customers</p>
                        </div>
                    </div>
                    <div className={styles.box}>
                        <img src={icon10} alt=""/>
                        <div className={styles.boxContent}>
                            <h4>₹2,07,852</h4>
                            <p>Covid-relief Impact</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Stories