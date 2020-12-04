import React from 'react'
import { data } from '../../../../data';
import styles from './RecentTopic.module.css'

const RecentTopic = () => {
    return (
        <div className={styles.container}>
            <h1>Recent Topic</h1>

            <div className={styles.content}>
                {data.map(val => {
                    return (
                        <div className={styles.box}>
                            <img src={val.bgImage} alt=""/>
                            <h4>{val.title}</h4>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
export default RecentTopic;