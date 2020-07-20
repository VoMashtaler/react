import React from 'react';
import s from './Post.module.css';

// post on main page
const Post = (props) => {

    

    return (
        <div className={s.item}>
            <img src="https://whatsism.com/uploads/posts/2018-07/1530546770_rmk_vdjbx10.jpg" alt='1'>

            </img>
            {props.message}
            
            <div>
                <span>Like {props.likesCount}</span>
            </div>
        </div>
    )
}

export default Post;