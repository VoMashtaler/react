//import { authAPI } from "../API/API";
//import { stopSubmit } from "redux-form";
import { getAuthUserData } from "./auth-reducer";

const INITIALIZED_SUCCESED = 'INITIALIZED_SUCCESED';



let initialState = {
    initialized: false

};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCESED:
            return {
                ...state,
                initialized: true
            }
        default:
            return state;

    }
}

export const initializedSuccess = () => ({ type: INITIALIZED_SUCCESED })

export const initializeApp = () => (dispatch) => {
    let promise = dispatch(getAuthUserData());
    Promise.all([promise])
    .then(() => {
        dispatch(initializedSuccess())
    })    
}

export default appReducer;