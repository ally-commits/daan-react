import React from 'react'
import styles from './WhatWeDo.module.css'

import icon1 from '../../../assets/img/icon-pink-1.svg'
import icon2 from '../../../assets/img/icon-pink-2.svg'
import icon3 from '../../../assets/img/icon-pink-3.svg'


const WhatWeDo = () => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.h1}>What we do</h1>
                <p className={styles.p}>Every Individual Has The Potential To Be An DAAN</p>

                <div className={styles.cards}>
                    <div className={styles.card}>
                        <div className={styles.imgContainer}>
                            <img src={icon1} alt=""/>
                        </div> 
                        <h1 className={styles.head}>Want To Be Our In-house</h1>
                        <p>Eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque. Eu feugiat pretium nibh ipsum consequat nisl vel pretium. </p>
                    </div>

                    <div className={styles.card}>
                        <div className={styles.imgContainer}>
                            <img src={icon2} alt=""/>
                        </div> 
                        <h1 className={styles.head}>Want To Be Our In-house</h1>
                        <p>Eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque. Eu feugiat pretium nibh ipsum consequat nisl vel pretium. </p>
                    </div>

                    <div className={styles.card}>
                        <div className={styles.imgContainer}>
                            <img src={icon3} alt=""/>
                        </div> 
                        <h1 className={styles.head}>Want To Be Our In-house</h1>
                        <p>Eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque. Eu feugiat pretium nibh ipsum consequat nisl vel pretium. </p>
                    </div>

                    <div className={styles.card}>
                        <div className={styles.imgContainer}>
                            <img src={icon1} alt=""/>
                        </div> 
                        <h1 className={styles.head}>Want To Be Our In-house</h1>
                        <p>Eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque. Eu feugiat pretium nibh ipsum consequat nisl vel pretium. </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default WhatWeDo;