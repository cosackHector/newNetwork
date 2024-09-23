import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";

    // СОСТОЯНИЕ
let store = {
    _state: {
        profile: {
            post: [
                {id: 1, post: 'Здарова заебали. Как жизнь? У кого что нового?', likes: 2},
                {id: 2, post: 'Кто проходит путь самуая от Димыча?', likes: 4},
            ],
            newPostText: '',
        },
        dialogs: {
            dialogs: [
                {name: 'Димыч', id: 1},
                {name: 'Евгений', id: 2},
                {name: 'Санек', id: 3},
            ],
            message: [
                {id: 1, message: 'Привет как дела'},
                {id: 2, message: 'Привет как дела'},
            ],
            newMessageText: '',
        },
    },
    _callSubscriber() {
        console.log('call subscriber');
    },
    subscriber(observer) {
        this._callSubscriber  = observer
    },
    getState() {
        return this._state
    },
    //     const newPost = { 
    //         id: 3, 
    //         post: this._state.profile.newPostText, 
    //         likes: 2 }
    //     this._state.profile.post.push(newPost)
    //     this._state.profile.newPostText = ''
    //     this._callSubscriber(this._state)
    // },
    // changeNewPostText(text) {
    //     this._state.profile.newPostText = text
    //     this._callSubscriber(this._state)
    // },
    dispatch(action) {
        profileReducer(this._state, action)
        dialogsReducer(this._state, action)
        this._callSubscriber(this._state)
    },
};

window.store = store

export default  store;
