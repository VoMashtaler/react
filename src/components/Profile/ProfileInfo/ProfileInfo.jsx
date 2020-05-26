import React from 'react';
import s from './ProfileInfo.module.css';



const ProfileInfo = () => {
    return <div>
        <div>
            <img src="https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fdam%2Fimageserve%2F1072753294%2F960x0.jpg%3Ffit%3Dscale" 
            alt='2'>
            </img>
        </div>
        <div className={s.descriptionBlock}>
            ava + description
    </div>
    </div>
}

export default ProfileInfo;