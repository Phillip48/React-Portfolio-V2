import React from 'react';
import './Experience.css';
// Npm installed icons. just need to use
// import { BiWorld } from "react-icons/bi";

const Experience = () => {
    return (
        <section className='holds-experience-section'>
            <h1 className='intro-big'>Experience</h1>
            <div className='margin-side'>
                <h3 className='sub-intro-med'>Tarvelers Guide</h3>
                <p className='para-text-small'>Who doesn't wanna travel the world? This app allows you to see where a country is located and some information about the country. Not to mention follow other users and review the countries youve visited... and of course have a favorites list.</p>
            </div>
            <div className='div-padding'></div>
            <div className='margin-side'>
                <h3 className='sub-intro-med'>Reel Good Movies</h3>
                <p className='para-text-small'>Reel Good Movies is a full stack web application where a user can register an account, search in a movie database, post a review for movie, and save movies to their watched and will watch profile lists.</p>
            </div>
            <div className='div-padding'></div>
            <div className='margin-side'>
                <h1 className='sub-intro-med'>Route My Day</h1>
                <p className='para-text-small'>Route my day is a website that provides travelers with a service to schedule their travel routes for daily trips. This web app works by finding local business in a city of your choice and then adds them to a jQuery list to sort. Then it takes that list and makes your route using google maps.</p>
            </div>
        </section>  
    )
}

export default Experience;