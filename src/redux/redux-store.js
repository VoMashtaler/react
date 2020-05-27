import { createStore, combineReducers } from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import navbarReducer from "./navbar-reducer";

let reducers = combineReducers({
    
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    navbarPage: navbarReducer,
});

let store = createStore(reducers);

export default store;