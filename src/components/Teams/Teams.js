import React from 'react'
 
import Footer from '../Utils/Footer/Footer'; 
import Banner from './Banner/Banner';
import Landing from './Landing/Landing';
import People from './People/People';
import StartYour from '../Utils/StartYour/StartYour'

const Teams = () => {
    return (
        <React.Fragment> 
            <Landing />
            <People />
            <Banner />
            <StartYour />
            <Footer />
        </React.Fragment>
    )
}
export default Teams;