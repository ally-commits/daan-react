import React from 'react'
import styles from './Story.module.css'

import img1 from '../../../assets/img/about-img-1.png';

const Story = () => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.leftContent}>
                    <img src={img1} alt="" />
                </div>
                <div className={styles.rightContent}>
                    <p>We believe in your power to make someone smile, to save someone's life, to foster brilliant ideas, to make a social change and to be the impact you want to make in the world.</p>

                    <p>An Impact Guru is someone who envisions change, who finds solutions to social problems, who steps up to support another change-maker, who makes kindness a habit, who dares to follow his/her dream, or who simply helps out a friend in need.</p>

                    <p>We believe that each individual holds the power to effect great change and given the right tools and the right backing, can become an Impact Guru himself/herself. We've built an easy-to-use platform to transform individuals into Impact Gurus, who will lead the world to goodness. We offer the best online tools to mobilize the crowd towards great ideas and projects and get good things done fast.</p>
                </div>
            </div>
        </div>
    )
}
export default Story;