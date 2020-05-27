import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import navbarReducer from "./navbar-reducer";

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
                { id: 1, name: 'Перший бот' },
                { id: 2, name: 'Другий бот' },
                { id: 3, name: 'Третій бот' },
                { id: 4, name: 'Четвертий бот' },
                { id: 5, name: 'Пятий бот' },
                { id: 6, name: 'Шостий бот' }
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
                { id: 1, name: 'Перший бот', status: 'on' },
                { id: 2, name: 'Другий бот', status: 'off' },
                { id: 3, name: 'Третій бот', status: 'on' },
                { id: 4, name: 'Четвертий бот', status: 'on' },
                { id: 5, name: 'Пятий бот', status: 'off' },
                { id: 6, name: 'Шостий бот', status: 'on' },
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

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.navbarPage = navbarReducer(this._state.navbarPage, action);

        this._callSubscriber(this._state);       
    }
}

export default store;
window.store = store;