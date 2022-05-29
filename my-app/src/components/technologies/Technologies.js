import React from 'react';
import './Technologies.css';


const Technologies = () => {
    return (
        <div className='holds-everything-technologies'>
            <h1 className='intro-big'>Technologies</h1>
            <p className='para-text-small'>I've worked with...</p>

            <div className='technologies-worked-display'>
                <div>
                    <h3 className='sub-intro-med'>Front-End</h3>
                    <p className='para-text-small'>Experience with...</p>
                    <p className='para-text-small'>HTML</p>
                </div>

                <div>
                    <h3 className='sub-intro-med'>Back-End</h3>
                    <p className='para-text-small'>Experience with...</p>
                    <p className='para-text-small'>JavaScript</p>
                </div>

                <div>
                    <h3 className='sub-intro-med'>UI/UX</h3>
                    <p className='para-text-small'>Experience with...</p>
                    <p className='para-text-small'>Tools like figma</p>
                </div>
            </div>

        </div>
    )
}

export default Technologies;