import React from 'react';
import { SocialData } from '../data/SocialData';
import './Social.css';

const Social = () => {
    const data = SocialData;

    return (
        <div className='social-contact'>
            {data.map((item) => {
                return(
                    <a href={item.link} target='_blank'>
                        <div className="social-icon-div">
                            <img src={item.icon} className='social-icon' />
                        </div>
                    </a>
                )
            })}
        </div>
    )
}

export default Social