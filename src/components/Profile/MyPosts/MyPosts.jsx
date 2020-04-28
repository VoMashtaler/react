import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = () => {
    return <div>
        <div>
            My posts
        <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
        </div>
        <div className={s.posts}>
            <Post message="Привіт, як ти?" likes="15"/>
            <Post message="Це мій перший пост" likes="20"/>
        </div>
    </div>
}

export default MyPosts;