import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from '../../common/loader/loader';
import usersPhoto from '../../../assets/images/user1.png';

//import ProfileStatus from './ProfileStatus'
import ProfileStatusWithHooks from './ProfileStatusWithHooks';



const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0])
        }

    }

    return <div>
        {/* <div>
            <img 
            src="https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fdam%2Fimageserve%2F1072753294%2F960x0.jpg%3Ffit%3Dscale" 
            alt='23213'>
            </img>
        </div> */}
        <div className={s.descriptionBlock}>
            <img src={props.profile.photos.large || usersPhoto} className={s.mainPhoto} alt='profilephoto'/>
            {props.isOwner && <input type={"file"} onChange={onMainPhotoSelected}/>}
            <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
    </div>
    </div>
}

export default ProfileInfo;