import React from 'react'

import Landing from './Landing/Landing'
import StartYour from '../Utils/StartYour/StartYour';
import About from './About/About';
import Trending from './Trending/Trending';
import JoinOur from './Join/JoinOur';
import GetStarted from './GetStarted/GetStarted';
import Stories from './Stories/Stories';
import ChooseDaan from './ChooseDaan/ChooseDaan';
import DonateNow from './DonateNow/DonateNow';
import Social from './Social/Social';
import Footer from '../Utils/Footer/Footer';

const HomePage = () => {
    return (
        <React.Fragment>
            <Landing />
            <StartYour />

            <About />
            <Trending />

            <JoinOur />
            <GetStarted />

            <Stories />
            <ChooseDaan />

            <DonateNow />
            <Social />

            <Footer />
        </React.Fragment>
    )
}
export default HomePage;