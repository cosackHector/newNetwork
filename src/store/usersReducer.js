const FOLLOW = 'FOLLOW';
const SET_USERS = 'SET-USERS';

const initialState = {
    users: 
    [
        {
            id: '1', 
            photoURL: '',
            followed: false, 
            firstName: 'Евгений',
            lastName: 'Гергелев', 
            fullName: function() {
                return `${this.firstName}  ${this.lastName}`},
            status: 'Привет всем!', 
            location: {
                country: 'Россия', 
                city: 'Азов'}
        },
        {
            id: '2', 
            photoURL: '',
            followed: true, 
            firstName: 'Алексей',
            lastName: 'Кондаков', 
            fullName: function() {
                return `${this.firstName}  ${this.lastName}`},
            status: 'Привет всем!', 
            location: {
                country: 'Россия', 
                city: 'Ростов на Дону'}
        },
    ],
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