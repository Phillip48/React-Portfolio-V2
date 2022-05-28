
// import logo from '../logo.svg';
import React from 'react';
import './Navbar.css';
import peronsalLogo from '../image/Myproject.png';

const Navbar = () => {
    return <header>
        <section className='navbar-everything'>
            <div className='navbar-div-img'>
                <img className='myLogo-img' src={peronsalLogo} alt="Logo"></img>
                <p className='test'>test</p>
            </div>
            <navbar>
                
            </navbar>
        </section>

    </header>
    {/* // <div className="App">
//     <header className="App-header">
//       <img src={logo} className="App-logo" alt="logo" />
//       <p>
//         Edit <code>src/App.js</code> and save to reload.
//       </p>
//       <a
//         className="App-link"
//         href="https://reactjs.org"
//         target="_blank"
//         rel="noopener noreferrer"
//       >
//         Learn React
//       </a>
//     </header>
//   </div> */}
}

export default Navbar;