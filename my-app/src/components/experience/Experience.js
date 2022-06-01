import React from 'react';
import './Experience.css';
// Npm installed icons. just need to use
// import { BiWorld } from "react-icons/bi";

const Experience = () => {
    return (
        <section className='holds-experience-section'>
            <h1 className='intro-big'>Experience</h1>
            <div className='holds-experience-sides'>
                <section className='section-left-experience'>
                    <div className='margin-side'>
                        <img src='' alt='project-img' className='experience-img'></img>
                        <h3 className='sub-intro-med padding-top'>Tarvelers Guide</h3>
                        <p className='para-text-small margin-side'>Who doesn't wanna travel the world? This app allows you to see where a country is located and some information about the country. Not to mention follow other users and review the countries youve visited... and of course have a favorites list.</p>
                        <div className=''>
                            <img src='' alt='project-img' className='experience-img'></img>
                            <h3 className='sub-intro-med padding-top'>Route My Day</h3>
                            <p className='para-text-small margin-side'>Route my day is a website that provides travelers with a service to schedule their travel routes for daily trips. This web app works by finding local business in a city of your choice and then adds them to a jQuery list to sort. Then it takes that list and makes your route using google maps.</p>
                        </div>
                    </div>
                </section>
                <section className='section-right-experience'>
                    <div className='margin-side'>
                        <img src='' alt='project-img' className='experience-img'></img>
                        <h3 className='sub-intro-med padding-top'>Reel Good Movies</h3>
                        <p className='para-text-small margin-side'>Reel Good Movies is a full stack web application where a user can register an account, search in a movie database, post a review for movie, and save movies to their watched and will watch profile lists.</p>
                    </div>
                </section>


            </div>

        </section>
    )
}

export default Experience;