const FOLLOW = 'FOLLOW';
const SET_USERS = 'SET-USERS';

const initialState = {
    users: []
};

const usersReducer = (state = initialState, action) => {
    switch(action.type) {
        case FOLLOW: 
            return {
                ...state, 
                users: state.users.map(u => {
                    if(u.id === action.userId) {
                        return {...u, followed: !u.followed}
                    }
                    return u;
                })
            }
        case SET_USERS: 
            return {
                ...state, users: action.users
            }
        }
    return state;
};


export const followAC = (userId) => ( {type: FOLLOW, userId } );
export const setUsersAC = (users) => ( {type: SET_USERS, users});

export default usersReducer;