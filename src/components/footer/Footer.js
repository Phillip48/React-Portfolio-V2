import React from 'react';
import './Footer.css';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

const Footer = () => {
    return (
        <footer className='margin-side-footer '>
            <div className='linebreak-footer'></div>
            <section className='footer-flex'>
                <div className='footer-responsive'>
                    <h3 className='sub-intro-med-footer'>Call:</h3>
                    <a href='tel:3219468987'><p className='para-text-small-footer'> 321-946-8987</p></a>
                </div>
                <div className='div-padding '></div>
                <div className='footer-responsive'>
                    <h3 className='sub-intro-med-footer'>Email:</h3>
                    <a href='mailto: phillippereira02@gmail.com'><p className='para-text-small-footer'> phillippereira02@gmail.com</p></a>
                </div>
                <div>
                    <a href='https://github.com/Phillip48'><AiFillGithub className='footer-icons' /></a>
                    <a href='https://www.linkedin.com/in/phillip-pereira-719985232/'><AiFillLinkedin className='footer-icons' /></a>
                </div>
            </section>

        </footer>
    )
}

export default Footer;