import React from 'react'
import styles from './Map.module.css'

const Map = () => {
    return (
        <div className={styles.container}>
            <div className={styles.round}>&nbsp;</div>
 
            <p className={styles.point}>903 E. Birchpond Street Rahway, NJ 07065</p>
        </div>
    )
}

export default Map;