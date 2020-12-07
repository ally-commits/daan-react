import React from 'react';
import styles from './Landing.module.css'
import Header from '../../Utils/Header/Header'

const Landing = () => {
    return (
        <div className={styles.container}>
            <Header />

            <div className={styles.content}>
                <h1>We Belive in the</h1>
                <h1>power of you</h1>

                <p>This is where revolutions are born. Where social change begins. This is where you raise awareness and funds. Where you change the world. This is your key to tomorrow. This is your Ketto.</p>
            </div>

            <div className={styles.round}>&nbsp;</div>
        </div>
    )
}

export default Landing;