const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';


let initialState = {
     users: [
         { id: 1, photoUrl: 'file:///C:/Users/User/Desktop/TheMASK/Logo1.jpg', 
         followed: false, fullName: 'Somebody1', status: "I am number 1", location: { city: 'Lviv', country: 'Ukraine' } },
         { id: 2, photoUrl: 'C:/Users/User/Desktop/TheMASK/Logo1.jpg', 
         followed: true, fullName: 'Somebody2', status: "I am number 2", location: { city: 'Kyiv', country: 'Ukraine' } },
         { id: 3, photoUrl: 'C:/Users/User/Desktop/TheMASK/Logo1.jpg',
          followed: true, fullName: 'Somebody3', status: "I am number 3", location: { city: 'Warszaw', country: 'Poland' } },
         { id: 4, photoUrl: 'C:/Users/User/Desktop/TheMASK/Logo1.jpg',
          followed: false, fullName: 'Somebody4', status: "I am number 4", location: { city: 'Berlin', country: 'Germany' } },

     ]
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                //users: [...state.users], 
                users: state.users.map(  u => {
                    if (u.id === action.userId){
                        return {...u, followed: true}
                    }
                    return u;
                } ), 
            }


        case UNFOLLOW:
            return {
                ...state,
                //users: [...state.users], 
                users: state.users.map( u => {
                    if (u.id === action.userId){
                        return {...u, followed: false}
                    }
                    return u;
                } ), 
            }

        case SET_USERS: {
            return {
                ...state,
                users: [...state.users, ...action.users] }
            }
        
        default:
            return state;

    }
}

export const followAC = (userId) => ({ type: FOLLOW, userId })

export const unffolowAC = (userId) => ({ type: UNFOLLOW, userId })

export const setUserAC = (users) => ({ type: SET_USERS, users })

export default usersReducer;