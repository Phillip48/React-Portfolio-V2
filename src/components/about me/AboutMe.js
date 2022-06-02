import React from 'react';
import './AboutMe.css';
// import Particle from '../particles/Particles';
// import Technologies from '../technologies/Technologies';
import Type from '../typing/Type';
// import peronsalLogo from '../image/Myproject.png';
import peronsalLogo2 from '/Users/phill/OneDrive/Documents/Peronsal Project coding/React-Portfolio-V2/src/image/1P-logos_transparent.png';
// import BgAnimation from '../components/BackgroundAnimation';

const Aboutme = () => {
    return (
        <main>
            {/* <Particle /> */}
            <div className='holds-everything'>
                <section className='holds-both-sides'>
                    <section className='leftside-text 'id='aboutme'>
                        <h1 className='intro-big'>Hi! I'm <span className='underline-name'>Phillip!</span></h1>
                        <div className='type-words'>
                            <Type />
                        </div>
                        <div className='div-padding-aboutme'></div>
                        <h3 className='sub-intro-med'>Welcome to my portfolio!</h3>
                        <p className='para-text-small'>I'm a fullstack developer with a passion for web design and making apps.
                            I enjoy developing various websites and apps that provide real value to the end user.
                            My goal is to continue to build apps and further my knowledge in this field. Outside of that I love the outdoors.
                            I love to hike and especially rock climb.</p>
                    </section>
                    <section className='rightside-text'>
                        {/* <BgAnimation /> */}
                        <img className='animate-homepage-img' src={peronsalLogo2} alt="Logo" />
                    </section>
                </section>
            </div>
            {/* <Technologies /> */}
        </main>)
}

export default Aboutme;