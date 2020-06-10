import profileReducer, { addPostActionCreator, deletePost } from "./profile-reducer";

let state = {
    posts: [
        { id: 1, message: 'Привіт. Як ти?', likesCount: 15 },
        { id: 2, message: 'Це мій перший пост', likesCount: 20 },
        { id: 3, message: 'Тут якийсь пост', likesCount: 99 },
        { id: 4, message: 'І тут теж', likesCount: 1 }
    ]
};

it ('new post should be', () => {
    let action = addPostActionCreator("new post")
    
    let newState = profileReducer(state, action);

    expect (newState.posts.length).toBe(5);
});
it ('message of new post', () => {
    let action = addPostActionCreator("new post")
    
    let newState = profileReducer(state, action);

    expect (newState.posts[4].message).toBe("new post");
});
it ('after deleting', () => {
    let action = deletePost(1)
    
    let newState = profileReducer(state, action);

    expect (newState.posts.length).toBe(3);
});
