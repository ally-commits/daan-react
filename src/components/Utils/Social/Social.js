import React from 'react'
import styles from './Social.module.css'

import social1 from '../../../assets/svg/social1.svg'
import social2 from '../../../assets/svg/social2.svg'
import social3 from '../../../assets/svg/social3.svg'
import social4 from '../../../assets/svg/social4.svg'
import social5 from '../../../assets/svg/social5.svg'

const Social = () => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <h1>Our partners</h1>

                <img src={social3} alt=""/>
                <img src={social1} alt=""/>
                <img src={social2} alt=""/>
                <img src={social4} alt=""/>
                <img src={social5} alt=""/>
            </div>
        </div>
    )
}
export default Social;