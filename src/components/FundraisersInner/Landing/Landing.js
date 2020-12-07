import React from 'react'
import styles from './Landing.module.css'
 
import Header from '../../Utils/Header/Header'
import bgImage from '../../../assets/img/fund-raiser-bg.png'

import icon1 from '../../../assets/svg/card.svg'
import icon2 from '../../../assets/svg/paypal.svg'

import facebookIcon from '../../../assets/svg/facebook-bone.svg'
import googleIcon from '../../../assets/svg/google.svg'

const Landing = () => {
    return (
        <div className={styles.container}>
            <Header />

            <div className={styles.content}>
                <div className={styles.leftContent}>
                    <img src={bgImage} alt=""/>
                </div>
                <div className={styles.rightContent}>
                    <h5>45,000.00 Pledged</h5>
                    <h1>Mountain Bikes for NWA <br />Children’s Shelter</h1>

                    <div className={styles.btnGroups}>
                        <button className="btn-red">Donate Now</button>

                        <button className={styles.btn2}>
                            <img src={icon1} alt=""/>
                            pay with credit card
                        </button>

                        <button className={styles.btn2}>
                            <img src={icon2} alt=""/>
                            pay with paypal
                        </button>
                    </div>

                    <div className={styles.timeLine}>
                        <div className={styles.progress}>
                            <div className={styles.drop}>
                                <span>₹</span>
                            </div>
                        </div>

                        <div className={styles.divider}>
                            <p>87,000.00 <span>Goal</span></p>

                            <p>143 supporters <span>|</span> 17 days left</p>
                        </div>
                    </div>

                    <div className={styles.footer}>
                        <button className={styles.btnEmpty}>
                            share fundraiser
                        </button>

                        <button className={styles.btnFacebook}>
                            <img src={facebookIcon} />
                            Share with facebook
                        </button>

                        <button className={styles.btnGoogle}>
                            <img src={googleIcon} />
                            Share with google
                        </button>
                    </div>
                </div>
            </div>

            <div className={styles.round}>&nbsp;</div>
        </div>
    )
}

export default Landing;