import React from 'react';
import './Technologies.css';


const Technologies = () => {
    return (
        <div className='holds-everything-technologies'>
            <h1 className='intro-big'>Technologies</h1>
            <p className='para-text-small margin-side'>I've worked with...</p>
            <div className='div-padding'></div>
            <div className='technologies-worked-display'>
                <div className='tech-experience'>
                    <h3 className='sub-intro-med'>Front-End</h3>
                    <p className='para-text-small'>Experience with...</p>
                    <p className='para-text-small'>HTML5</p>
                    <p className='para-text-small'>CSS3</p>
                    <p className='para-text-small'>Bootstrap</p>
                    <p className='para-text-small'>Bulma</p>
                    <p className='para-text-small'>Tailwind</p>
                    <p className='para-text-small'>React</p>
                </div>

                <div className='tech-experience'>
                    <h3 className='sub-intro-med'>Back-End</h3>
                    <p className='para-text-small'>Experience with...</p>
                    <p className='para-text-small'>JavaScript</p>
                    <p className='para-text-small'>Node JS</p>
                    <p className='para-text-small'>Express JS</p>
                    <p className='para-text-small'>MongoDb</p>
                    <p className='para-text-small'>Mongoose</p>
                    <p className='para-text-small'>GraphQl</p>
                </div>

                <div className='tech-experience'>
                    <h3 className='sub-intro-med'>Dev Tools</h3>
                    <p className='para-text-small'>Such as...</p>
                    <p className='para-text-small'>Figma</p>
                    <p className='para-text-small'>Github</p>
                    <p className='para-text-small'>Postman</p>
                    <p className='para-text-small'>Heroku</p>
                    <p className='para-text-small'>Insomnia</p>
                </div>
            </div>

        </div>
    )
}

export default Technologies;