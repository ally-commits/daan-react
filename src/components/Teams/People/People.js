import React from 'react'
import styles from './People.module.css'

import team1 from '../../../assets/img/team1.png'
import team2 from '../../../assets/img/team2.png'
import team3 from '../../../assets/img/team3.png'
import team4 from '../../../assets/img/team4.png'
import team5 from '../../../assets/img/team5.png'
import team6 from '../../../assets/img/team6.png' 


const People = () => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.box}>
                    <h1>Yulia</h1>
                    <img src={team1} alt=""/>
                </div>
                <div className={styles.box}>
                    <h1>Johnston</h1>
                    <img src={team2} alt=""/>
                </div>
                <div className={styles.box}>
                    <h1>Fraklin</h1>
                    <img src={team3} alt=""/>
                </div>

                <div className={styles.box}>
                    <h1>Samkohia</h1>
                    <img src={team4} alt=""/>
                </div>

                <div className={styles.box}>
                    <h1>Johnston</h1>
                    <img src={team5} alt=""/>
                </div>
                <div className={styles.box}>
                    <h1>Fraklin</h1>
                    <img src={team6} alt=""/>
                </div>

                <div className={styles.box}>
                    <h1>Samkohia</h1>
                    <img src={team3} alt=""/>
                </div>
                <div className={styles.box}>
                    <h1>Johnston</h1>
                    <img src={team1} alt=""/>
                </div>
                <div className={styles.box}>
                    <h1>Fraklin</h1>
                    <img src={team4} alt=""/>
                </div>
            </div>

            <button>Load More</button>
            <div className={styles.round}>&nbsp;</div>
        </div>
    )
}

export default People;