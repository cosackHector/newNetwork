const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT';
const ADD_MASSAGE = 'ADD-MASSAGE';

const initialState = {
    dialogs: [
        {name: 'Димыч', id: 1},
        {name: 'Евгений', id: 2},
        {name: 'Санек', id: 3},
    ],
    message: [
        {id: 1, message: 'Привет как дела'},
        {id: 2, message: 'Че кого сучары?'},
    ],
    newMessageText: '',
};

const dialogsReducer = (state = initialState, action) => {
    switch(action.type) {
        case UPDATE_MESSAGE_TEXT: 
            return {
                ...state, 
                newMessageText: action.text
            };

        case ADD_MASSAGE: 
            const newMessage = {
                id: 3,
                message: state.newMessageText
            }
            return {
                ...state, 
                message: [...state.message, newMessage],
                newMessageText: ''
            }
        }
    return state;
};

export const updateMassageTextAC = (text) => ({type: UPDATE_MESSAGE_TEXT, text});
export const addMassageAC = () => ( {type: ADD_MASSAGE} ); 


export default dialogsReducer;