import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from '../../common/loader/loader';
import ProfileStatus from './ProfileStatus'



const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }
    return <div>
        {/* <div>
            <img 
            src="https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fdam%2Fimageserve%2F1072753294%2F960x0.jpg%3Ffit%3Dscale" 
            alt='23213'>
            </img>
        </div> */}
        <div className={s.descriptionBlock}>
            <img src={props.profile.photos.small} alt='profilephoto'/>
            <ProfileStatus status={"Some text here"}/>
    </div>
    </div>
}

export default ProfileInfo;