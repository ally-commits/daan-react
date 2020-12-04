import React from 'react'
import Footer from '../Utils/Footer/Footer'
import Social from '../Utils/Social/Social'
import StartYour from '../Utils/StartYour/StartYour'

import Landing from './Landing/Landing'
import MainContent from './MainContent/MainContent'
 

const Fundraisers = () => {
    return (
        <React.Fragment>
            <Landing />  
            <StartYour />
            <MainContent />

            <Social />
            <Footer />
        </React.Fragment>
    )
}
export default Fundraisers;