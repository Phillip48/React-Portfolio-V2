import React from 'react';
import './Experience.css';
// Npm installed icons. just need to use
// import { BiWorld } from "react-icons/bi";
import routeMyDay from '/Users/phill/OneDrive/Documents/Peronsal Project coding/React-Portfolio-V2/src/image/project1mapmyroute.png';
import travelGuide from '/Users/phill/OneDrive/Documents/Peronsal Project coding/React-Portfolio-V2/src/image/travelGuide.jpg';
import moviesPic from '/Users/phill/OneDrive/Documents/Peronsal Project coding/React-Portfolio-V2/src/image/moviesPic.png';


const Experience = () => {
    return (
        <section className='holds-experience-section' id='experience'>
            <h1 className='intro-big'>Experience</h1>
            <div className='holds-experience-sides'>
                <section className='section-left-experience'>
                    <div className=' one-project margin-top'>
                        <a href='https://github.com/Phillip48/country-V2'><img src={travelGuide} alt='project-img' className='experience-img'></img>
                            <h3 className='sub-intro-med-experience'>🌎 Tarvelers Guide <button className='linktosite'>Check it out!</button></h3>
                            <p className='para-text-small margin-side'>Who doesn't want to travel the world? This app allows you to see where a country is located and some information about the country. Not to mention follow other users and review the countries youve visited... and of course have a favorites list.</p>
                        </a>
                    </div>
                    {/* <div></div> */}
                    <div className=' one-project margin-top'>
                        <a href='https://github.com/Phillip48/reel-good-movies'><img src={moviesPic} alt='project-img' className='experience-img'></img>
                            <h3 className='sub-intro-med-experience'>🍿 Reel Good Movies <button className='linktosite'>Check it out!</button></h3>
                            <p className='para-text-small margin-side'>Reel Good Movies is a full stack web application where a user can register an account, search in a movie database, post a review for movie, and save movies to their watched and will watch profile lists.</p>
                        </a>
                    </div>
                </section>
                <section className='section-right-experience'>
                    <div className=' one-project margin-top'>
                        <a href="https://github.com/Phillip48/route-my-day"><img src={routeMyDay} alt='project-img' className='experience-img'></img>
                            <h3 className='sub-intro-med-experience'>🛣️ Route My Day <button className='linktosite'>Check it out!</button></h3>
                            <p className='para-text-small margin-side'>Route my day is a website that provides travelers with a service to schedule their travel routes for daily trips. This web app works by finding local business in a city of your choice and then adds them to a jQuery list to sort. Then it takes that list and makes your route using google maps.</p>
                        </a>
                    </div>
                </section>
                {/* <section className='section-right-experience'>
                    <div className=' one-project margin-top'>
                        <a href="https://github.com/Phillip48/route-my-day"><img src={moviesPic} alt='project-img' className='experience-img'></img>
                            <h3 className='sub-intro-med-experience'> <button className='linktosite'>Check it out!</button></h3>
                            <p className='para-text-small margin-side'></p>
                        </a>
                    </div>
                </section> */}
            </div>
        </section>
    )
}

export default Experience;