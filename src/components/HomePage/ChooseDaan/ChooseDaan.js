import React from 'react'
import styles from './ChooseDaan.module.css'

import groupPic from '../../../assets/img/groupPic.png'

const ChooseDaan = () => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.leftContent}>
                    <h6>Our Promise To You</h6>

                    <h1>why should we choose <span>Daan</span></h1>

                    <p>Phosfluorescently customize value-added channels via timely resources. Compellingly whiteboard technically sound initiatives and scalable e-business. Globally fashion covalent functionalities rather than go forward process improvements. Monotonectally benchmark timely technologies.</p>
                    <p>Phosfluorescently customize value-added channels via timely resources</p>

                    <div className={styles.btns}>
                        <button className="btn-orange-gradient">Start a fundraiser - it's FREE</button>
                        <button className={styles.btn}>Learn more</button>
                    </div>
                </div>
                <div className={styles.rightContent}>
                    <img src={groupPic} />
                </div>
            </div>
            <div className={styles.round}>&nbsp;</div>

            <h1 className={styles.head}>CHOOSE US</h1>
        </div>
    )
}

export default ChooseDaan;