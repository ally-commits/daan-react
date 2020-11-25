import React from 'react'
import styles from './Landing.module.css'
import landingKids from '../../assets/img/landing-kids.png'


const Landing = () => {
    return (
        <div className={styles.container}>
            <div className={styles.header}>

            </div>

            <div className={styles.content}>
                <div className={styles.leftContent}>
                    &nbsp;
                </div>
                <div className={styles.rightContent}>
                    <h1>CHANGE A</h1>
                    <h2>CHILD'S LIFE</h2>

                    <h4>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi officiis molestias sequi ad? </h4>

                    <div className={styles.playContent}>
                        <div className={styles.playButton}>
                            <div className={styles.playButtonSpan}>
                                &lt;
                            </div>
                        </div>

                        <p>start a fundraiser for free</p>
                    </div>
                </div>
            </div>

            <img src={landingKids} className={styles.landingKids} />
        </div>
    )
}

export default Landing;