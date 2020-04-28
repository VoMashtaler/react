import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';


const Profile = () => {
    return <div>
        <div>
            <img src="https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fdam%2Fimageserve%2F1072753294%2F960x0.jpg%3Ffit%3Dscale">
            </img>
        </div>
        <div>
            ava + description
    </div>
        <MyPosts />
    </div>
}

export default Profile;