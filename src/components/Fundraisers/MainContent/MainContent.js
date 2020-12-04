import React from 'react'
import styles from './MainContent.module.css'
import Navbar from './NavBar/Navbar'
import Content from './Content/Content'

const MainContent = () => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <Navbar />
                <Content />
            </div>
        </div>
    )
}
export default MainContent;