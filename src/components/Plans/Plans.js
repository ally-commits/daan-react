import React from 'react'

import Landing from './Landing/Landing'

import Footer from '../Utils/Footer/Footer';
import Pricing from './Pricing/Pricing';
import Notes from './Notes/Notes';

const Plans = () => {
    return (
        <React.Fragment>
            <Landing /> 
            <Pricing />
            <Notes />
            <Footer />
        </React.Fragment>
    )
}
export default Plans;