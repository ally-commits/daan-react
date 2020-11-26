import React from 'react'; 
import styles from './ContentSlider.module.css'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { data } from '../../../../data';

const ContentSlider = () => {
    let settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4, 
        slidesToScroll: 1,  
        accessibility: true,
        arrows: false,  
        responsive: [
          {
            breakpoint: 1700,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,  
            }
          },{
            breakpoint: 1320,
            settings: {
              slidesToShow: 2.5,
              slidesToScroll: 1,  
            }
          },{
            breakpoint: 1100,
            settings: {
              slidesToShow: 2.2,
              slidesToScroll: 1,  
            }
          },{
            breakpoint: 950,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,  
            }
          },{
            breakpoint: 750,
            settings: {
              slidesToShow: 1.5,
              slidesToScroll: 1,  
            }
          },{
            breakpoint: 600,
            settings: {
              slidesToShow: 1.5,
              slidesToScroll: 1,  
            }
          },{ 
            breakpoint: 450,
            settings: {
              slidesToShow: 1.2,
              slidesToScroll: 1,  
            }
          },{ 
            breakpoint: 350,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,  
            }
          } 
        ]
    };
    return ( 
        <Slider {...settings} >
            {data.map(val => {
                return (
                    <div className={styles.content}>
                        <div className={styles.topContent} style={{backgroundImage: `linear-gradient(180deg, transparent, rgba(0,0,0,0.5)), url(${val.bgImage})`}}>
                            <button className={styles.btnTop}>tax benifits</button>
                            <h1>{val.title}</h1>
                        </div>

                        <div className={styles.bottomContent}>
                            <img src={val.profileImg} alt="" className={styles.profileImg} />
                            <h2>{val.name}</h2>

                            <p>{val.descipriton}</p>

                            <h4><span>₹</span>{val.price}</h4>

                            <div className={styles.slider}>&nbsp;</div>

                            <div className={styles.info}>
                                <span>{val.supporters} supporters</span>
                                <span>{val.days} days left</span>
                            </div>

                            <button className={styles.btnDonate}>
                                Donate now
                            </button>
                        </div>
                    </div>
                )
            })}
        </Slider> 
    )
}

export default ContentSlider;