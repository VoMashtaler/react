let state = {
    profilePage: {
        posts: [
            { id: 1, message: 'Привіт. Як ти?', likesCount: 15 },
            { id: 2, message: 'Це мій перший пост', likesCount: 20 },
            { id: 3, message: 'Тут якийсь пост', likesCount: 99 },
            { id: 4, message: 'І тут теж', likesCount: 1 }
        ]
    },
    dialogsPage: {
        dialogs: [
            { id: 1, name: 'Котя' },
            { id: 2, name: 'Мамуся' },
            { id: 3, name: 'Татусь'},
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
        ]
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

}

export default state;