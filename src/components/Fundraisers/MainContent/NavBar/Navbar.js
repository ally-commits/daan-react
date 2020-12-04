import React from 'react'
import styles from './Navbar.module.css'

import icon1 from '../../../../assets/svg/1.svg';

const Navbar = () => {
    return (
        <div className={styles.container}> 
            <div className={styles.activeItem}>
                <div className={styles.imgContainer}>
                    <img src={icon1} alt="" />
                </div>
                <p>Covid Relief</p>
            </div>

            <div className={styles.navItem}>
                <div className={styles.imgContainer}>
                    <img src={icon1} alt="" />
                </div>
                <p>Children</p>
            </div>
            <div className={styles.navItem}>
                <div className={styles.imgContainer}>
                    <img src={icon1} alt="" />
                </div>
                <p>Food Hunger</p>
            </div>
            <div className={styles.navItem}>
                <div className={styles.imgContainer}>
                    <img src={icon1} alt="" />
                </div>
                <p>Education</p>
            </div>
            <div className={styles.navItem}>
                <div className={styles.imgContainer}>
                    <img src={icon1} alt="" />
                </div>
                <p>Elderly Support</p>
            </div>

            <div className={styles.navItem}>
                <div className={styles.imgContainer}>
                    <img src={icon1} alt="" />
                </div>
                <p>Medical Supplies</p>
            </div>
            <div className={styles.navItem}>
                <div className={styles.imgContainer}>
                    <img src={icon1} alt="" />
                </div>
                <p>Hand Craft</p>
            </div>
        </div>
    )
}
export default Navbar;