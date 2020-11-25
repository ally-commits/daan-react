import React from 'react'
import styles from './styles/App.module.css';

import Landing from './components/HomePage/Landing/Landing'
import StartYour from './components/HomePage/StartYour/StartYour';

const App = () => {
  return (
    <div className={styles.container}>
      <Landing />
      <StartYour />
    </div>
  );
}

export default App;
