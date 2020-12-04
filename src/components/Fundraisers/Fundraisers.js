import React from 'react'
import StartYour from '../Utils/StartYour/StartYour'

import Landing from './Landing/Landing'
import MainContent from './MainContent/MainContent'
 

const Fundraisers = () => {
    return (
        <React.Fragment>
            <Landing />  
            <StartYour />
            <MainContent />
        </React.Fragment>
    )
}
export default Fundraisers;