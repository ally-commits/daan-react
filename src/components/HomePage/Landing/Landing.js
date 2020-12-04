import React from 'react'
import styles from './Landing.module.css'

import landingKids from '../../../assets/img/landing-kids.png'
import playSvg from '../../../assets/svg/play.svg'
import Header from '../../Utils/Header/Header'


const Landing = () => {
    return (
        <div className={styles.container}>
            <Header /> 

            <div className={styles.content}>
                <div className={styles.leftContent}>
                    &nbsp;
                </div>
                <div className={styles.rightContent}>
                    <h1>CHANGE A</h1>
                    <h2>CHILD'S LIFE</h2>

                    <h4>Help Thalassemia Warriors get a better Blood Transfusion!</h4>

                    <div className={styles.playContent}>
                        <div className={styles.playButton}>
                            <div className={styles.playButtonSpan}>
                                <img src={playSvg} />
                            </div>
                        </div> 
                        <p>start a fundraiser for free</p>
                    </div>

                    <div className={styles.specBoxes}>
                        <div className={styles.specBox}>
                            <p>250,000 +</p>
                            <p>Fundraisers</p>
                        </div>

                        <div className={styles.specBox}>
                            <p>1000 crs+</p>
                            <p>Raised</p>
                        </div>

                        <div className={styles.specBox}>
                            <p>4.1 million+</p>
                            <p>Donations</p>
                        </div>
                    </div>
                </div>
            </div>

            <img src={landingKids} className={styles.landingKids} />

            <div className={styles.roundBlue}>
                &nbsp;
            </div>

            <button className={styles.btnRightFixed}>Start a Fundraiser- it's FREE</button>
        </div>
    )
}

export default Landing;