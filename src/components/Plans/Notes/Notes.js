import React from 'react'
import styles from './Notes.module.css'
import pointIcon from '../../../assets/svg/grid-point.svg'

const Notes = () => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <h1>Notes</h1>
                 
                <div className={styles.point}>
                    <img src={pointIcon} alt=""/>
                    <p>Standard pricing is applicable only on fundraisers started on 15th August 2020 and onwards.</p>
                </div>
                <div className={styles.point}>
                    <img src={pointIcon} alt=""/>
                    <p>Premium features at 0% for natural disasters</p>
                </div>

                <div className={styles.point}>
                    <img src={pointIcon} alt=""/>
                    <p>Local + Foreign Payment gateway fee of 3% is applicable on the funds raised</p>
                </div>
                <div className={styles.point}>
                    <img src={pointIcon} alt=""/>
                    <p>Taxes as applicable: GST of 18% will be charged additionally on Ketto Success Fee and Payment Gateway fee (not on the total funds raised) Ketto Success Fee would be calculated on actual amount collected and not goal amount</p>
                </div>

                <div className={styles.point}>
                    <img src={pointIcon} alt=""/>
                    <p>Currency exchange rate would depend on the receivers bank</p>
                </div>
                <div className={styles.point}>
                    <img src={pointIcon} alt=""/>
                    <p>GST credit will be available to customers who submit the GST details timely on our portal Advertising cost will be added & as per actuals If you have any queries email info@ketto.org</p>
                </div>
                <div className={styles.point}>
                    <img src={pointIcon} alt=""/>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. At quos nesciunt consectetur quia, ipsam hic?</p>
                </div> 
            </div>

            <div className={styles.round}>&nbsp;</div>
        </div>
    )
}

export default Notes;