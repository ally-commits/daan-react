import React from 'react'
import styles from './Landing.module.css'
 
import Header from '../../Utils/Header/Header'
import bgImage from '../../../assets/img/contact-bg.png'

const Landing = () => {
    return (
        <div className={styles.container}>
            <Header />

            <div className={styles.content}>
                <div className={styles.leftContent}>
                    <img src={bgImage} alt=""/>
                </div>
                <div className={styles.rightContent}>
                    <h1>24HRS on DESk</h1>
                    <p>Choose an option that suits your crowdfunding needs the most!</p>
                </div>
            </div>

            <div className={styles.round}>&nbsp;</div>
        </div>
    )
}

export default Landing;