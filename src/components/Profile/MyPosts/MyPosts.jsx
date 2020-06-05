import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import { Field, reduxForm } from 'redux-form';


const AddNewPostForm = (props) => {
   
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name="newPostText" component="textarea"/>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

//AddNewPostsForm = reduxForm({form: "ProfileAddNewPostsForm"})(AddNewPostForm);
const AddNewPostsForm = reduxForm ({
     form: 'ProfileAddNewPostsForm'
 })(AddNewPostForm);

const MyPosts = (props) => {
    let postsElements = props.posts
        .map(p => <Post message={p.message} likesCount={p.likesCount} key={p.id} />)
    
   
    let onAddPost = (values) => {
        props.addPost(values.newPostText);
    }  

    return (
        <div className={s.classBlock}>
            <h3>My posts</h3>
            <AddNewPostsForm onSubmit={onAddPost}/>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;