import React from 'react'
import styles from './Form.module.css'

import phoneIcon from '../../../assets/svg/phone.svg'
import mailIcon from '../../../assets/svg/mail.svg'
import locationIcon from '../../../assets/svg/location.svg'

const Form = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.head}>Contact <span>DAAN</span> to start your crowdfunding campaign!</h1>

            <div className={styles.content}>
                <div className={styles.leftContent}>
                    <h1>Leave a Comment</h1>

                    <div className={styles.row}>
                        <select>
                            <option value="1">Select An Enquiry Topic</option>
                            <option value="1">1</option>
                            <option value="1">1</option>
                        </select>
                    </div>
                    <div className={styles.row}>
                        <div className={styles.formGroup}>
                            <label htmlFor="">Name</label>
                            <input type="text" placeholder="Name" />
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="">Email Address</label>
                            <input type="text" placeholder="Email" value="contact@gmail.com" />
                        </div>
                    </div>

                    <div className={styles.row}>  
                        <div className={styles.formGroup}>
                            <label htmlFor="">Message</label>
                            <textarea type="text" placeholder="Message" rows={10}></textarea>
                        </div>
                    </div>

                    <div className={styles.footer}>
                        <button>Submit</button>
                    </div>
                </div>

                <div className={styles.rightContent}>
                    <h1>We'd Love To Hear From You!</h1>

                    <div className={styles.point}>
                        <img src={phoneIcon} alt=""/>
                        <p>+91 9900998877</p>
                    </div>

                    <div className={styles.point}>
                        <img src={mailIcon} alt=""/>
                        <p>mail@applore.com</p>
                    </div>

                    <div className={styles.point}>
                        <img src={locationIcon} alt=""/>
                        <p>903 E. Birchpond Street Rahway, NJ 07065</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Form;