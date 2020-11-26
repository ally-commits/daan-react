import React from 'react'
import styles from './styles/App.module.css';

import Landing from './components/HomePage/Landing/Landing'
import StartYour from './components/HomePage/StartYour/StartYour';
import About from './components/HomePage/About/About';
import Trending from './components/HomePage/Trending/Trending';
import JoinOur from './components/HomePage/Join/JoinOur';
import GetStarted from './components/HomePage/GetStarted/GetStarted';
import Stories from './components/HomePage/Stories/Stories';
import ChooseDaan from './components/HomePage/ChooseDaan/ChooseDaan';
import DonateNow from './components/HomePage/DonateNow/DonateNow';
import Social from './components/HomePage/Social/Social';
import Footer from './components/HomePage/Footer/Footer';

const App = () => {
  return (
    <div className={styles.container}>
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
    </div>
  );
}

export default App;
