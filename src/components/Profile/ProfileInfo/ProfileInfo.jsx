import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from '../../common/loader/loader';
import usersPhoto from '../../../assets/images/user1.png';
//import ProfileStatus from './ProfileStatus'
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import { useState } from 'react';
import ProfileDataForm from './ProfileDataForm';



const ProfileInfo = ({profile, savePhoto, status, updateStatus, isOwner, saveProfile}) => {

    let [editMode, setEditMode] = useState(false);

    if (!profile) {
        return <Preloader />
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0])
        }

    }

    const onSubmit = (formData) =>  {
        saveProfile(formData).then (()=> {
            setEditMode(false)
        });
                 
    }

    return <div>
        <div className={s.descriptionBlock}>
            <img src={profile.photos.small || usersPhoto} className={s.mainPhoto} alt='profilephoto'/>
            {isOwner && <input type={"file"} onChange={onMainPhotoSelected}/>}

            { editMode 
            ? <ProfileDataForm initialValues={profile}  profile={profile} onSubmit={onSubmit}/> 
            : <ProfileData goToEditMode={() =>{setEditMode(true)}} profile={profile} isOwner={isOwner} />}
            <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
    </div>
    </div>
}

const ProfileData = ({profile, isOwner, goToEditMode}) => {
    return  <div>
    {isOwner && <div><button onClick={goToEditMode}>Edit</button></div>}
    <div>
    <b>Full name:</b> {profile.fullName}
    </div>
    <div>
    <b>Looking for a job:</b> {profile.lookingForAJob ? "yes" : "no"}
    </div>
    { profile.lookingForAJob &&
    <div>
    <b>My skills:</b> {profile.lookingForAJobDescription}
    </div>
    }
    <div>
    <b>About me:</b> {profile.aboutMe}
    </div>
    <div>
    <b>Contacts:</b> {Object.keys(profile.contacts).map (key => {
        return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
    })}
    </div>
</div>
}


const Contact = ({contactTitle, contactValue}) => {
return <div className={s.contact}> <i>{contactTitle}</i>: {contactValue}</div>
}

export default ProfileInfo;