import React from 'react';
import styles from './Landing.module.css'
import Header from '../../Utils/Header/Header'
import bgImage from '../../../assets/img/about-bg.png'

const Landing = () => {
    return (
        <div className={styles.container}>
            <Header />

            <div className={styles.content}>
                <h1>your are power</h1>
                <h1>this is your platform</h1>

                <img src={bgImage} alt=""/>
            </div>

            <div className={styles.round1}>&nbsp;</div>
            <div className={styles.round2}>&nbsp;</div>
            <div className={styles.round3}>&nbsp;</div>
        </div>
    )
}

export default Landing;