const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';


let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: 'Привіт. Як ти?', likesCount: 15 },
                { id: 2, message: 'Це мій перший пост', likesCount: 20 },
                { id: 3, message: 'Тут якийсь пост', likesCount: 99 },
                { id: 4, message: 'І тут теж', likesCount: 1 }
            ],
            newPostText: ''
        },
        dialogsPage: {
            dialogs: [
                { id: 1, name: 'Котя' },
                { id: 2, name: 'Мамуся' },
                { id: 3, name: 'Татусь' },
                { id: 4, name: 'Персик' },
                { id: 5, name: 'Руслан' },
                { id: 6, name: 'Бот' }
            ],
            messages: [
                { id: 1, message: 'Привіт' },
                { id: 2, message: 'Як твоя соц мережа?' },
                { id: 3, message: 'Ку' },
                { id: 4, message: 'Yo' },
                { id: 5, message: 'Yo' },
            ],
            newMessageBody: ''
        },
        navbarPage: {
            friends: [
                { id: 1, name: 'Котя', status: 'on' },
                { id: 2, name: 'Мамуся', status: 'off' },
                { id: 3, name: 'Татусь', status: 'on' },
                { id: 4, name: 'Персик', status: 'on' },
                { id: 5, name: 'Руслан', status: 'off' },
                { id: 6, name: 'Бот', status: 'on' },
            ]
        }

    },
    _callSubscriber() {
        console.log('State changed')
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatche(action) {
        if (action.type === ADD_POST) {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
            this._state.dialogsPage.newMessageBody = action.body;
            this._callSubscriber(this._state);
        } else if (action.type === SEND_MESSAGE) {
            let body = this._state.dialogsPage.newMessageBody;
            this._state.dialogsPage.newMessageBody = '';
            this._state.dialogsPage.messages.push( {id : 6, message: body});
            this._callSubscriber(this._state);
        }
    }
}

export const addPostActionCreator = () =>
    ({ type: ADD_POST })

export const updateNewPostTextActionCreator = (text) =>
    ({ type: UPDATE_NEW_POST_TEXT, newText: text })

export const sendMessageCreator = () =>
    ({ type: SEND_MESSAGE })

export const updateNewMessageBodyCreator = (text) =>
    ({ type: UPDATE_NEW_MESSAGE_BODY, body: text })



export default store;
window.store = store;




    // addPost() {
    //     let newPost = {
    //         id: 5,
    //         message: this._state.profilePage.newPostText,
    //         likesCount: 0
    //     };
    //     this._state.profilePage.posts.push(newPost);
    //     this._state.profilePage.newPostText = '';
    //     this._callSubscriber(this._state);
    // },
    // addMessage(dialogMessage) {
    //     let newMessage = {
    //         id: 6,
    //         message: dialogMessage
    //     };
    //     this._state.dialogsPage.messages.push(newMessage);
    //     this._callSubscriber(this._state);
    // },
    // updateNewPostText(newText) {
    //     this._state.profilePage.newPostText = newText;
    //     this._callSubscriber(this._state);
    // },
