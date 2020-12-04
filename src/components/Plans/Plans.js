import React from 'react'

import Landing from './Landing/Landing'

import Footer from '../Utils/Footer/Footer';
import Pricing from './Pricing/Pricing';
import Notes from './Notes/Notes';
import StartYour from '../Utils/StartYour/StartYour';

const Plans = () => {
    return (
        <React.Fragment>
            <Landing /> 
            <Pricing />
            <Notes />
            <StartYour />
            <Footer />
        </React.Fragment>
    )
}
export default Plans;