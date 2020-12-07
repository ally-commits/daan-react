import React from 'react'
 
import Footer from '../Utils/Footer/Footer'; 
import StartYour from '../Utils/StartYour/StartYour';
import Landing from './Landing/Landing'; 
import MakeIt from './MakeIt/MakeIt';
import Story from './Story/Story';
import WeProvide from './Weprovide/WeProvide';
import WhatWeDo from './WhatWeDo/WhatWeDo';



const About = () => {
    return (
        <React.Fragment> 
            <Landing /> 
            <Story />

            <WhatWeDo />
            <MakeIt />

            <WeProvide />
            <StartYour />

            <Footer />
        </React.Fragment>
    )
}
export default About;