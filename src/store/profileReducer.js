const ADD_POST = 'ADD-POST';
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';

const initialState = {
    post: [
        {id: 1, post: 'Здарова заебали. Как жизнь? У кого что нового?', likes: 2},
        {id: 2, post: 'Кто проходит путь самуая от Димыча?', likes: 4},
    ],
    newPostText: '',
};

const profileReducer = (state = initialState, action) => {

    switch(action.type) {
        case ADD_POST: 
            const post = {
                id: 5,
                post: state.newPostText,
                likes: 0,
            }
        return {
            ...state,
            post: [...state.post, post],
            newPostText: '' 
        }

        case UPDATE_POST_TEXT: 
            return {
                ...state, 
                newPostText: action.text
            }
        }
    return state;
};


export const addPostAC = () => ( {type: ADD_POST } );
export const updatePostTextAC = (text) => ( {type: UPDATE_POST_TEXT, text});

export default profileReducer;