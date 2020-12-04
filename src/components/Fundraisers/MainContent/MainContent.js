import React from 'react'
import styles from './MainContent.module.css'
import Navbar from './NavBar/Navbar'
import Content from './Content/Content'
import RecentTopic from './RecentTopic/RecentTopic'
import Support from './Support/Support'

const MainContent = () => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.sideBar}>
                    <h1>Campaign Categories</h1>
                    <Navbar />
                    <RecentTopic />
                    <Support />
                </div>
                <Content />
            </div>
        </div>
    )
}
export default MainContent;