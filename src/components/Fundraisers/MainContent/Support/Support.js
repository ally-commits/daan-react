import React from 'react'
import styles from './Support.module.css'
  
import bgImage from '../../../../assets/img/support-bg.png'

const Support = () => {
    return (
        <div className={styles.container}> 
            <img src={bgImage} alt=""/>

            <h1>Support Our Message</h1>

            <p>You can join Special Events</p>

            <button>Donate now</button>
        </div>
    )
}
export default Support;