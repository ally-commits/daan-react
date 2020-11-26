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
        slidesToShow: 1, 
        slidesToScroll: 1,  
        accessibility: true,
        arrows: false,  
        responsive: [
          {
            breakpoint: 1700,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,  
            }
          },{
            breakpoint: 1320,
            settings: {
              slidesToShow: 2.1,
              slidesToScroll: 1,  
            }
          },{
            breakpoint: 1100,
            settings: {
              slidesToShow: 2.1,
              slidesToScroll: 1,  
            }
          },{
            breakpoint: 950,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,  
            }
          },{
            breakpoint: 750,
            settings: {
              slidesToShow: 1.1,
              slidesToScroll: 1,  
            }
          },{
            breakpoint: 600,
            settings: {
              slidesToShow: 1.1,
              slidesToScroll: 1,  
            }
          },{ 
            breakpoint: 450,
            settings: {
              slidesToShow: 1.1,
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
            {Array(5).fill().map(val => {
                return (
                  <div className={styles.content}>
                    <h1>Success Stories</h1>
                    <h5>Thousands are fundraising online on <span>DAAN</span></h5>

                    <p>Efficiently e-enable process-centric leadership skills after next-generation resources. Holisticly productivate timely leadership without top-line relationships. Compellingly transition sticky markets without customized e-tailers. Collaboratively disseminate user friendly ideas through front-end.</p>
                  </div>
                )
            })}
        </Slider> 
    )
}

export default ContentSlider;