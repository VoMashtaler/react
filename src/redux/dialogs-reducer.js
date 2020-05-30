const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.body
            };
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            return {
                ...state,
                newMessageBody: '',
                messages: [...state.messages, { id: 6, message: body }]
            };
        default:
            return state;
    }
}

export const sendMessageCreator = () =>
    ({ type: SEND_MESSAGE })

export const updateNewMessageBodyCreator = (text) =>
    ({ type: UPDATE_NEW_MESSAGE_BODY, body: text })

export default dialogsReducer;