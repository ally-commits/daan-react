import React from 'react'

import Landing from './Landing/Landing' 
import Footer from '../Utils/Footer/Footer';
import Cards from './Cards/Cards';
import Trending from '../HomePage/Trending/Trending'
import StartYour from '../Utils/StartYour/StartYour'

const FundraisersInner = () => {
    return (
        <React.Fragment>
            <Landing /> 
            <Cards />

            <Trending />
            <StartYour />

            <Footer />
        </React.Fragment>
    )
}
export default FundraisersInner;