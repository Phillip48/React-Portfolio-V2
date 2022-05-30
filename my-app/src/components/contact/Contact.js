import React from 'react';
import { useRef } from 'react'
import './Contact.css';
// import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
// import emailjs from '@emailjs/browser'
// Npm installed icons. just need to use
// import { BiWorld } from "react-icons/bi";

const Contact = () => {

    return (
        <section className='holds-contact-section'>

            <h1 className='intro-big'>Lets talk!</h1>
            <section className='holds-contact-section-row'>
                <div className="map-wrap">
                    <div id='map'>
                        <p>-----------------------------------------Map will go here---------------------------------------------------- </p>
                    </div>
                </div>
                <div className='div-padding'></div>
                <div className='contact-form-right'>
                    <h3 className='sub-intro-med'>Contact me</h3>
                    <p className='para-text-small'>Form here...</p>
                </div>
            </section>

        </section>
    )
}

export default Contact;