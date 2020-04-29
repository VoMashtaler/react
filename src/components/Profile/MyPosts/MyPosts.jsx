import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = () => {

    let postsData = [
        { id: 1, message: 'Привіт. Як ти?', likesCount: 15},
        { id: 2, message: 'Це мій перший пост', likesCount: 20}      
    ];

    return <div>
        <div className={s.classBlock}>
            <h3>My posts</h3>
        <div>
                <div>
                    <textarea></textarea>
                </div>
                <button>Add post</button>
            </div>
        </div>
        <div className={s.posts}>
            <Post message={postsData[0].message} likesCount={postsData[0].likesCount} />
            <Post message={postsData[1].message} likesCount={postsData[1].likesCount} />            
        </div>
    </div>
}

export default MyPosts;