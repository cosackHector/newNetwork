import { combineReducers, createStore } from 'redux';
import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import usersReducer from './usersReducer';

const reducers = combineReducers({
    dialogs: dialogsReducer,
    profile: profileReducer,
    users: usersReducer
});

const store = createStore(reducers);

export default store;