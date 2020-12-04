import React from 'react'
import { data } from '../../../../data';
import styles from './Content.module.css'

const Content = () => {
    return (
        <div className={styles.container}>
            {data.map(val => {
                return (
                    <div className={styles.content}>
                        <div className={styles.leftContent}>
                            <img src={val.bgImage} alt=""/>
                            <button className={styles.btnTop}>tax benifits</button>
                        </div>
                        <div className={styles.rightContent}>
                            <h1>{val.title}</h1>
                            <p>{val.descipriton}</p>

                            <h4><span>₹</span>{val.price}</h4>

                            <div className={styles.slider}>&nbsp;</div>

                            <div className={styles.info}>
                                <span>{val.supporters} supporters</span>
                                <span>{val.days} days left</span>
                            </div>

                            <div className={styles.footer}>
                                <div className={styles.profile}>
                                    <img src={val.profileImg} alt=""/>
                                    <h2>{val.name}</h2>
                                </div>

                                <button>Donate Now</button>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
export default Content;