import React from 'react'
import styles from './Header.module.css'

import daanLogo from '../../../assets/svg/daan-logo.svg'
import searchIcon from '../../../assets/svg/search.svg'
import userIcon from '../../../assets/svg/user.svg'
import chatIcon from '../../../assets/svg/chat.svg'

const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.headerContent}>
                <img src={daanLogo} className={styles.headerLogo}/>

                <div className={styles.navItems}>
                    <p className={styles.navItem}>Browse Fundraiser</p>
                    <p className={styles.navItem}>Fundraiser For</p>
                    <p className={styles.navItem}>Start a Fundraiser</p>
                    <p className={styles.navItem}>
                        <img src={searchIcon} />
                        Sign In
                    </p>
                    <p className={styles.navItem}>
                        <img src={userIcon} />
                    </p>

                    <button className="btn btn-orange-gradient">Fight Covid-19</button>
                    <button className={styles.chatButton}>
                        <img src={chatIcon} />
                        Chat
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Header;