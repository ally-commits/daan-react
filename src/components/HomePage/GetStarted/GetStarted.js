import React from 'react';
import styles from './GetStarted.module.css';

import icon9 from '../../../assets/svg/9.svg'
import icon10 from '../../../assets/svg/10.svg'
import icon11 from '../../../assets/svg/11.svg'
import icon12 from '../../../assets/svg/12.svg'

const GetStarted = () => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <h1>How To Get Started</h1>
                <p>Follow these simple steps and start raising in a few minutes.</p>

                <div className={styles.boxes}>
                    <div className={styles.iconGroup}>
                        <div className={styles.iconSet}>
                            <img src={icon9} className={styles.icon} />
                        </div>
                        <p>Need Money</p>
                    </div>
                    <div className={styles.iconGroup}>
                        <div className={styles.iconSet}>
                            <img src={icon10} className={styles.icon} />
                        </div>
                        <p>Start A fundraiser</p>
                    </div>
                    <div className={styles.iconGroup}>
                        <div className={styles.iconSet}>
                            <img src={icon11} className={styles.icon} />
                        </div>
                        <p>Share Your Fundraiser</p>
                    </div>
                    <div className={styles.iconGroup}>
                        <div className={styles.iconSet}>
                            <img src={icon12} className={styles.icon} />
                        </div>
                        <p>Instantly Withdraw Funds</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GetStarted;