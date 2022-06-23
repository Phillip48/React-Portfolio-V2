import React from 'react';
import './Navbar.css';
// import peronsalLogo from '../image/Myproject.png';
import peronsalLogo from '/Users/phill/OneDrive/Documents/Peronsal Project coding/React-Portfolio-V2/src/image/1Phillip Pereira-logos_transparent.png';
// import resume from '"C:\Users\phill\OneDrive\Documents\Peronsal Project coding\resume folder\Updated Resume- Phillip Pereira (1).pdf"';


const Navbar = () => {
    return (
    <header className='header-class'>
        <section className='navbar-everything'>
            <div className='navbar-div-img'>
               <img className='myLogo-img' src={peronsalLogo} alt="Logo" />
            </div>
            <navbar className='navbar-elements'>
                {/* <a href='/'><h4 className='element-in-navbar'>Home</h4></a> */}
                <a href='#aboutme'><h4 className='element-in-navbar'>About Me</h4></a>
                <a href='#experience'><h4 className='element-in-navbar'>Experience</h4></a>
                <a href='#contact'><h4 className='element-in-navbar'>Contact Me</h4></a>
                <a href='https://docs.google.com/document/d/1IOyJKIY2Gops2HWI2NI0Ob0huubyN70pMmlAs0u-FX8/export?format=pdf'><h4 className='element-in-navbar'>Resume</h4></a>
            </navbar>
        </section>
        {/*  To use with whatever part of the page the user is on. It will get highlighted in the navbar */}
        {/* <div className='foractive-underNavbar'></div> */}
    </header>
    )
}

export default Navbar;