import React from 'react'
import styles from './styles/App.module.css';

import Landing from './components/HomePage/Landing'

const App = () => {
  return (
    <div className={styles.container}>
      <Landing />
    </div>
  );
}

export default App;
