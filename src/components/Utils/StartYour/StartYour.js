import React from 'react'
import styles from './StartYour.module.css'

const StartYour = () => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <p>START YOUR  FUNDRAISER RIGHT AWAY</p>

                <div className={styles.blocks}>
                    <div className={styles.block}>
                        How much do you want to raise?
                    </div>
                    <div className={styles.block}>
                        How much do you want to raise?
                    </div>
                    <div className={styles.block}>
                        How much do you want to raise?
                    </div>
                    <div className={styles.block}>
                        How much do you want to raise?
                    </div>

                    <button className={styles.button}>
                        Submit
                    </button>
                </div>
            </div>
        </div>
    )
}

export default StartYour;