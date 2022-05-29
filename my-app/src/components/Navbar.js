import React from 'react';
import './Navbar.css';
// import peronsalLogo from '../image/Myproject.png';
import peronsalLogo from '../image/Phillip Pereira-logos_transparent-trim.png';

const Navbar = () => {
    return (
    <header className='header-class'>
        <section className='navbar-everything'>
            <div className='navbar-div-img'>
                <a href='/'><img className='myLogo-img' src={peronsalLogo} alt="Logo" /></a>
            </div>
            <navbar className='navbar-elements'>
                <a href='/'><h4 className='element-in-navbar'>Home</h4></a>
                <a href='/'><h4 className='element-in-navbar'>About Me</h4></a>
                <a href='/'><h4 className='element-in-navbar'>Experience</h4></a>
                <a href='/'><h4 className='element-in-navbar'>Contact Me</h4></a>
            </navbar>
        </section>
    </header>)
}

export default Navbar;