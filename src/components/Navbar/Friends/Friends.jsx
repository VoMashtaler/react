import React from 'react';
import s from './Friends.module.css';


const Friends = (props) => {

    

    return (
        <div className={s.friends}>
            <div>{props.name}</div>
            {props.status}
            </div>
            
    )
}

export default Friends;