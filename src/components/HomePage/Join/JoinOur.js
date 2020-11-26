import React from 'react'
import styles from './JoinOur.module.css';

import icon1 from '../../../assets/svg/icon1.svg'
import icon2 from '../../../assets/svg/icon2.svg'
import icon3 from '../../../assets/svg/icon3.svg'

import icon4 from '../../../assets/svg/icon4.svg'
import icon5 from '../../../assets/svg/icon5.svg'

import packingImg from '../../../assets/img/packing.png'
import helpPeople from '../../../assets/img/helppeople.png'

const JoinOur = () => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>

                <div className={styles.section1}>
                    <div className={styles.leftContent}>
                        <h1>Join our mission</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, repellat, assumenda consequuntur natus dolore vero porro sint </p>
                    </div>
                    <div className={styles.rightContent}>
                        <h1>more</h1>
                    </div>
                </div>

                <div className={styles.section2}>
                    <div className={styles.leftContent}>
                        <img src={packingImg} alt=""/>
                    </div>
                    <div className={styles.rightContent}>
                        <h1>Follow these simple steps and start raising in a few minutes.</h1>
                        <p>Interactively supply plug-and-play manufactured products before diverse synergy. Rapidiously evolve client-focused experiences with an expanded.</p>

                        <div className={styles.specBoxes}>
                            <div className={styles.specBox}>
                                <img src={icon1} alt=""/>
                                <p>Start your fundraiser</p>
                            </div>
                            <div className={styles.specBox}>
                                <img src={icon2} alt=""/>
                                <p>Start your fundraiser</p>
                            </div>
                            <div className={styles.specBox}>
                                <img src={icon3} alt=""/>
                                <p>Instantly Withdraw Funds</p>
                            </div>
                        </div>

                        <button className="btn-orange-gradient">
                            LEARN MORE
                        </button>
                    </div>
                </div>

                <div className={styles.section3} >
                    <div className={styles.leftContent} >
                        <h1>Helping People</h1>
                        <p>Scale Smart was Co-Founded by two young entrepreneurs, Lucas Durante and Lachie Pior, who grew a $10 million consulting business within 12 months and enabling them to break free from the 9-5 lifestyle while still in their 20's.</p>

                        <div className={styles.infoBoxes} >
                            <div className={styles.infoBox} >
                                <img src={icon4} alt=""/>
                                <p>We’ve Raised <br />Over ₹ 500+ Crores</p>
                            </div>

                            <div className={styles.infoBox} >
                                <img src={icon5} alt=""/>
                                <p>Supported By <br />42,00,000+ Donors</p>
                            </div>
                        </div>
                        
                        <button className="btn-orange-gradient">
                            LEARN MORE
                        </button>
                    </div>
                    <div className={styles.rightContent} >
                        <img src={helpPeople} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default JoinOur;