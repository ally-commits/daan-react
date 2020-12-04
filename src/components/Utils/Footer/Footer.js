import React from 'react';
import styles from './Footer.module.css'

import daanLogo from '../../../assets/svg/daan-logo.svg';
import sendIcon from '../../../assets/svg/send.svg'

import facebookLogo from '../../../assets/svg/facebook.svg'
import twitterLogo from '../../../assets/svg/twitter.svg'
import youtubeLogo from '../../../assets/svg/youtube.svg'
import dribbleLogo from '../../../assets/svg/dribble.svg'

const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.mainBox}>
                    <img src={daanLogo} alt="" className={styles.logo} />

                    <p>Phosfluorescently streamline sustainable convergence without tactical services. Professionally streamline dynamic ideas and goal-oriented quality vectors. </p>
                </div>

                <div className={styles.box}>
                    <h1>About us</h1>

                    <p>About Us</p>
                    <p>Team</p>
                    <p>Careers</p>
                    <p>Blog</p>
                    <p>Press &amp; Awards</p>
                    <p>Contact Us</p>
                </div>

                <div className={styles.box}>
                    <h1>Learn</h1>
 
                    <p>How Crowdfunding Works</p>
                    <p>Fundraising Ideas</p>
                    <p>Fundraising Tips</p>
                    <p>Success Stories</p>
                    <p>Frequently Asked Questions</p>
                    <p>Pricing &amp; Fees</p>
                    <p>Trust &amp; Safety</p>
                </div>

                <div className={styles.box}>
                    <h1>TOP CATEGORIES</h1>
 
                    <p>Medical Crowdfunding</p>
                    <p>Child Health Crowdfunding</p>
                    <p>NGO Crowdfunding</p>
                    <p>Education Crowdfunding</p>
                    <p>Emergency Crowdfunding</p>
                    <p>Creative Fundraising</p>
                </div>

                <div className={styles.mainBox}>
                    <h2>Weekly dose of inspiration delivered straight to your inbox.</h2>

                    <div className={styles.inputGroup}>
                        <input type="text" placeholder="Email" />
                        <div className={styles.icon}>
                            <img src={sendIcon} alt=""/>
                        </div>
                    </div>

                    <div className={styles.socials}>
                        <img src={facebookLogo} />
                        <img src={twitterLogo} />
                        <img src={youtubeLogo} />
                        <img src={dribbleLogo} />
                    </div>
                </div>
            </div>

            <div className={styles.footerContent}>
                <div className={styles.footer}>
                    <p>&copy;2020 | All Rights Reserved</p>
                </div>
            </div>
        </div>
    )
}
export default Footer;