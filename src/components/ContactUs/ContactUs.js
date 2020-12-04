import React from 'react'

import Landing from './Landing/Landing'

import Footer from '../Utils/Footer/Footer';
import Form from './Form/Form';
import Map from './Map/Map'


const ContactUs = () => {
    return (
        <React.Fragment>
            <Landing /> 

            <Form />

            <Map />

            <Footer />
        </React.Fragment>
    )
}
export default ContactUs;