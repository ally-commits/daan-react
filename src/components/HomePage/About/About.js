import React from 'react'
import styles from './About.module.css'
import ImageSlider from './ImageSlider/ImageSlider'

import Video from './Video/Video'

import icon1 from '../../../assets/svg/1.svg'
import icon2 from '../../../assets/svg/2.svg'
import icon3 from '../../../assets/svg/3.svg'
import icon4 from '../../../assets/svg/4.svg'
import icon5 from '../../../assets/svg/5.svg'
import icon6 from '../../../assets/svg/6.svg'
import icon7 from '../../../assets/svg/7.svg'
import icon8 from '../../../assets/svg/8.svg' 

const About = () => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.topContainer}>
                    <div className={styles.peopleSay}>
                        <h4>What people say  about daan</h4>
                        <p>Medical treatments are expensive. They can exhaust your insurance and savings. With Milaap, you receive timely help to pay medical bills. Here’s how:</p>
                    </div>
                    <div className={styles.video}>
                        <Video></Video>
                        &nbsp;
                    </div>
                </div>

                <div className={styles.bottomContainer}>
                    <div className={styles.imgSlider}>
                        <ImageSlider />
                    </div>

                    <div className={styles.keyPoints}>
                        <h4>Causes you can raise funds for</h4>

                        <div className={styles.iconSets}>
                            <div className={styles.iconGroup}>
                                <div className={styles.iconSet}>
                                    <img src={icon1} className={styles.icon} />
                                </div>
                                <p>Covid Relief</p>
                            </div>
                            <div className={styles.iconGroup}>
                                <div className={styles.iconSet}>
                                    <img src={icon2} className={styles.icon} />
                                </div>
                                <p>Children</p>
                            </div>
                            <div className={styles.iconGroup}>
                                <div className={styles.iconSet}>
                                    <img src={icon3} className={styles.icon} />
                                </div>
                                <p>Food Hunger</p>
                            </div>
                            <div className={styles.iconGroup}>
                                <div className={styles.iconSet}>
                                    <img src={icon4} className={styles.icon} />
                                </div>
                                <p>Education</p>
                            </div>
                            <div className={styles.iconGroup}>
                                <div className={styles.iconSet}>
                                    <img src={icon5} className={styles.icon} />
                                </div>
                                <p>Wager Support</p>
                            </div>
                            <div className={styles.iconGroup}>
                                <div className={styles.iconSet}>
                                    <img src={icon6} className={styles.icon} />
                                </div>
                                <p>Elderly Support</p>
                            </div>
                            <div className={styles.iconGroup}>
                                <div className={styles.iconSet}>
                                    <img src={icon7} className={styles.icon} />
                                </div>
                                <p>Medical Supplies</p>
                            </div>
                            <div className={styles.iconGroup}>
                                <div className={styles.iconSet}>
                                    <img src={icon8} className={styles.icon} />
                                </div>
                                <p>Other</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;