import React from 'react'
import styles from './Cards.module.css'
import icon1 from '../../../assets/svg/icon4.svg'
import icon2 from '../../../assets/svg/icon11.svg'
import paymentIcon from '../../../assets/svg/payments.svg'
import barcode from '../../../assets/svg/barcode.svg'

const Cards  = () => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                
                <div className={styles.smallBox}>
                    <img src={icon2} alt=""/>
                    <div className={styles.textContent}>
                        <h1>Campaigner</h1>
                        <h4>Arthur Broklyn</h4>

                        <span>Contact</span>

                        <p>Read more</p>
                    </div>
                </div>

                <div className={styles.smallBox}>
                    <img src={icon1} alt=""/>
                    <div className={styles.textContent}>
                        <h1>Top Donors</h1>
                        <h4>Arthur Broklyn</h4>

                        <span>₹ 1,00,000</span>

                        <p>Read more</p>
                    </div>
                </div>

                <div className={styles.bigBox}>
                    <img src={barcode} alt=""/>
                    <div className={styles.textContent}>
                        <h1>Other Donation Methods</h1>
                        <div>
                            <h6>Donate Via</h6>

                            <img src={paymentIcon} alt=""/>
                        </div>

                        <p>Read more</p>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Cards;