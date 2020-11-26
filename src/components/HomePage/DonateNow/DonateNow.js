import React from 'react'
import styles from './DonateNow.module.css'

import boysPic from '../../../assets/img/boysPic.png'

const DonateNow = () => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.leftContent}>
                    <img src={boysPic} alt="" />
                </div>
                <div className={styles.rightContent}>
                    <h6>Objectively generate intellectual </h6>
                    <h1>Power of Daan Donation</h1>
                    <p>Credibly provide access to scalable resources for user-centric best practices. </p>
                    <p>Globally reintermediate best-of-breed outsourcing before sticky applications. Enthusiastically leverage existing wireless initiatives rather than go forward materials. Dramatically expedite.</p>

                    <button>
                        Donate Now
                    </button>
                </div>
            </div>
            <div className={styles.round}>&nbsp;</div>
        </div>
    )
}
export default DonateNow;
