import React from 'react'

import styles from './WeProvide.module.css'

const WeProvide = () => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <h1>we provide everything</h1>
                <h1>you need</h1>

                <p>Medical crowdfunding helps you raise funds online for healthcare expenses from friends, family and strangers.</p>

                <div className={styles.cards}>
                    <div className={styles.card}>
                        <div className={styles.header}>
                            <div className={styles.round}>&nbsp;</div>
                            <h5>Payout</h5>
                        </div>
                        <p>This is your money, you can withdraw it at any point during the course of your fundraiser</p>
                    </div>

                    <div className={styles.card}>
                        <div className={styles.header}>
                            <div className={styles.round}>&nbsp;</div>
                            <h5>Personalized Web App</h5>
                        </div>
                        <p>Get instant updates on your fundraiser's progress via instant alerts, email and track everything realtime on Ketto's web app</p>
                    </div>

                    <div className={styles.card}>
                        <div className={styles.header}>
                            <div className={styles.round}>&nbsp;</div>
                            <h5>24/7 support</h5>
                        </div>
                        <p>We offer you 24*7 assistance via call, WhatsApp, Email, SMS and our Instant Chatting Interface</p>
                    </div>
                </div>

                <div className={styles.footer}>
                    <button className="btn-orange-gradient">Start a fundraiser - it's FREE</button>
                </div>
            </div>
        </div>
    )
}
export default WeProvide;