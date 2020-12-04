import React from 'react'
import styles from './Pricing.module.css'

import pointIcon from '../../../assets/svg/point.svg'
import pointWhiteIcon from '../../../assets/svg/point-white.svg'


const Pricing = () => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.box}>
                    <div className={styles.topBox}>
                        <h1>SELF-DRIVEN</h1>
                        <p>Organize across all apps by hand</p>

                        <h2>
                            0% 
                            <div className={styles.perc}>
                                <span>$</span>
                                <small>Per Month</small>
                            </div>
                        </h2>

                        <button>Start A Fundraiser</button>
                    </div>
                    <div className={styles.bottomBox}>
                        <p>Applicable to both NGOs & Individuals</p>

                        <div className={styles.point}>
                            <img src={pointIcon} alt=""/>
                            <p>Local + Foreign payment gateways**</p>
                        </div>
                        <div className={styles.point}>
                            <img src={pointIcon} alt=""/>
                            <p>Single fundraisers</p>
                        </div>
                        <div className={styles.point}>
                            <img src={pointIcon} alt=""/>
                            <p>Real time support</p>
                        </div>
                        <div className={styles.point}>
                            <img src={pointIcon} alt=""/>
                            <p>Custom URL</p>
                        </div>
                    </div>
                </div>

                <div className={styles.box}>
                    <div className={styles.topBox}>
                        <h1>ASSISTED</h1>
                        <p>Organize across all apps by hand</p>

                        <h2>
                            5% 
                            <div className={styles.perc}>
                                <span>$</span>
                                <small>Per Month</small>
                            </div>
                        </h2>

                        <button>Start A Fundraiser</button>
                    </div>
                    <div className={styles.bottomBox}>
                        <p>Applicable to both NGOs & Individuals</p>

                        <div className={styles.point}>
                            <img src={pointIcon} alt=""/>
                            <p>Local + Foreign payment gateways**</p>
                        </div>
                        <div className={styles.point}>
                            <img src={pointIcon} alt=""/>
                            <p>Single fundraisers</p>
                        </div>
                        <div className={styles.point}>
                            <img src={pointIcon} alt=""/>
                            <p>Real time support</p>
                        </div>
                        <div className={styles.point}>
                            <img src={pointIcon} alt=""/>
                            <p>Custom URL</p>
                        </div>
                        <div className={styles.point}>
                            <img src={pointIcon} alt=""/>
                            <p>Real time support</p>
                        </div>
                        <div className={styles.point}>
                            <img src={pointIcon} alt=""/>
                            <p>Custom URL</p>
                        </div>
                    </div>
                </div>

                <div className={styles.boxOrange}>
                    <div className={styles.topBoxOrange}>
                        <h1>SELF-DRIVEN</h1>
                        <p>Organize across all apps by hand</p>

                        <h2>
                            0% 
                            <div className={styles.percOrange}>
                                <span>$</span>
                                <small>Per Month</small>
                            </div>
                        </h2>

                        <button>Start A Fundraiser</button>
                    </div>
                    <div className={styles.bottomBoxOrange}>
                        <p>Applicable to both NGOs & Individuals</p>

                        <div className={styles.pointOrange}>
                            <img src={pointWhiteIcon} alt=""/>
                            <p>Local + Foreign payment gateways**</p>
                        </div>
                        <div className={styles.pointOrange}>
                            <img src={pointWhiteIcon} alt=""/>
                            <p>Single fundraisers</p>
                        </div>
                        <div className={styles.pointOrange}>
                            <img src={pointWhiteIcon} alt=""/>
                            <p>Real time support</p>
                        </div>
                        <div className={styles.pointOrange}>
                            <img src={pointWhiteIcon} alt=""/>
                            <p>Custom URL</p>
                        </div>
                        <div className={styles.pointOrange}>
                            <img src={pointWhiteIcon} alt=""/>
                            <p>Single fundraisers</p>
                        </div>
                        <div className={styles.pointOrange}>
                            <img src={pointWhiteIcon} alt=""/>
                            <p>Real time support</p>
                        </div>
                        <div className={styles.pointOrange}>
                            <img src={pointWhiteIcon} alt=""/>
                            <p>Custom URL</p>
                        </div>
                        <div className={styles.pointOrange}>
                            <img src={pointWhiteIcon} alt=""/>
                            <p>Single fundraisers</p>
                        </div>
                        <div className={styles.pointOrange}>
                            <img src={pointWhiteIcon} alt=""/>
                            <p>Real time support</p>
                        </div> 
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pricing;