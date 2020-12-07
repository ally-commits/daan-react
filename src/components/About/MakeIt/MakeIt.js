import React from 'react'
import styles from './MakeIt.module.css'
 
import bgImage from '../../../assets/img/about-bg-2.png'

const MakeIt = () => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                
                <div className={styles.leftContent}>
                    <h1 className={styles.h1}>Make it easy with us</h1>

                    <div className={styles.block1}>
                        <h1>About DAAN</h1>
                        <p>We are a tech-for-good platform that provides complete crowdfunding solutions to empower individuals, NGOs and social enterprises to raise funds for medical emergencies, personal needs, creative projects or any social cause - be it big or small. We aim to bring together generosity with need to maximise people's potential to do good.</p>
                    </div>

                    <div className={styles.block2}>
                        <h1>We build great <br />business</h1>
                        <p>The right answer is always inherent in the right question. Our co- founder, Piyush Jain was fortunate enough to find the right question early in his life, which set him off to a journey of learning culminating into the birth of Impact Guru.</p>
                    </div>
                    
                    <div className={styles.block3}>
                        <h1>We build great <br />business</h1>
                        <p>Dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. Eleifend donec pretium vulputate sapien nec sagittis.</p>
                    </div>
                </div>
                    
                <div className={styles.rightContent}>
                    &nbsp;
                </div>

            </div>
        </div>
    )
}
export default MakeIt;