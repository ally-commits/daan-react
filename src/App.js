import React from 'react'
import styles from './styles/App.module.css';

import HomePage from './components/HomePage/HomePage';
import ContactUs from './components/ContactUs/ContactUs';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import Plans from './components/Plans/Plans';
import Fundraisers from './components/Fundraisers/Fundraisers';
import Teams from './components/Teams/Teams';
import About from './components/About/About';

const hist = createBrowserHistory();

const App = () => {
  return (
    <div className={styles.container}>
      <Router history={hist}> 
        <Switch>   
            <Route exact path="/" component={HomePage} />  
            <Route exact path="/contact-us" component={ContactUs} />  
            <Route exact path="/plans-and-pricing" component={Plans} />  
            <Route exact path="/browse-fundraisers" component={Fundraisers} />  

            <Route exact path="/teams" component={Teams} />  
            <Route exact path="/about" component={About} />  

          </Switch> 
      </Router>
    </div>
  );
}

export default App;
