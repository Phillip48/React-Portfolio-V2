import React from 'react';
import './Contact.css';
import { AiOutlineUser, AiOutlineMail, AiOutlineMessage } from 'react-icons/ai';
// import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
// import emailjs from '@emailjs/browser'
// Npm installed icons. just need to use
// import { BiWorld } from "react-icons/bi";
// import { useRef } from 'react'

const Contact = () => {

    return (
        <section className='holds-contact-section'>

            <h1 className='intro-big'>Lets talk!</h1>
            <section className='holds-contact-section-row'>
                <div className="map-wrap margin-side">
                    <div id='map'>
                        <iframe
                            width="100%"
                            height="100%"
                            title="map"
                            className="absolute inset-0"
                            frameBorder={0}
                            marginHeight={0}
                            marginWidth={0}
                            style={{ filter: "opacity(0.7)" }}
                            src="https://www.google.com/maps/embed/v1/place?q=32824+orlando+florida&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8" 
                        />                    
                    </div>
                </div>
                <div className='div-padding'></div>
                <div className='contact-form-right'>
                    <h3 className='sub-intro-med'>Contact me</h3>
                    <p className='para-text-small'>Form here...</p>
                    <form name='contact' className='contact-form-input'>
                        <div className="contact-form-labels">
                            <label htmlFor="name" className='para-text-small-form'>
                                <AiOutlineUser /> Name
                            </label>
                            <input type="text" id="name" name="name" className="input-field-form" />
                        </div>
                        <div className='div-padding-contact'></div>
                        <div className="contact-form-labels">
                            <label htmlFor="email" className='para-text-small-form'>
                                <AiOutlineMail /> Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="input-field-form" />
                        </div>
                        <div className='div-padding-contact'></div>
                        <div className="contact-form-labels">
                            <label htmlFor="message" className='para-text-small-form' name="Message">
                                <AiOutlineMessage /> Message
                            </label>
                            <textarea className="contact-form-labels-textarea input-field-form" />
                        </div>
                        <button type="submit" className="contact-form-labels-submit">
                            Submit
                        </button>
                    </form>
                </div>
            </section>
        </section>
    )
}

export default Contact;