import React from 'react'
 
import Footer from '../Utils/Footer/Footer'; 
import Landing from './Landing/Landing'; 
import Story from './Story/Story';

const About = () => {
    return (
        <React.Fragment> 
            <Landing /> 
            <Story />
            <Footer />
        </React.Fragment>
    )
}
export default About;