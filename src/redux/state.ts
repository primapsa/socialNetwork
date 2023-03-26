import {StoreType} from "../types";
import postsReducer from "./postsReducer";
import messagesReducer from "./messagesReducer";


const stateValue = {
    users: [
        {id: 1, username: 'Vasya'},
        {id: 2, username: 'Igor'},
        {id: 3, username: 'Lena'},
        {id: 4, username: 'Mashs'},
        {id: 5, username: 'Sveta'},
        {id: 6, username: 'VAlera'},
        {id: 7, username: 'Sergey'},
        {id: 8, username: 'VAdim'},
    ],
    messages: {
        messagesText: [
            {id: 1, message: 'Hello, how are you&'},
            {id: 2, message: 'What is going on?'},
            {id: 3, message: 'Nothing'},
            {id: 4, message: 'Good'},
            {id: 5, message: 'What is wrong?'},
            {id: 6, message: 'Dont worry'},
            {id: 7, message: 'Be happy'},
            {id: 8, message: 'Okay'},
        ],
        messagesTextarea: ''
    },
    posts: {
        postsText: [
            {id: 1, message: 'Hello, how are you&'},
            {id: 2, message: 'What is going on?'},
            {id: 3, message: 'Nothing'},
            {id: 4, message: 'Good'},
            {id: 5, message: 'What is wrong?'},
            {id: 6, message: 'Dont worry'},
            {id: 7, message: 'Be happy'},
            {id: 8, message: 'Okay'},
        ],
        inputValue: ''
    }
}
export let store: StoreType = {
    _state: stateValue,
    getState() {
        return this._state;
    },
    _subscriber(observer) {

    },

    subscribe(observer) {
        this._subscriber = observer;
    },
    dispatch(action) {


        this._state.posts = postsReducer(this._state.posts, action)
        this._state.messages = messagesReducer(this._state.messages, action)
        this._subscriber(this._state);

        //
        // if (action.type === 'ADD_NEW_INPUT') {
        //     this._state.posts.inputValue = action.inputValue;
        //     this._subscriber(this._state);
        // }
        // if (action.type === 'ADD_NEW_POST') {
        //     const posts = this._state.posts.postsText;
        //     const lastPostId = posts.length;
        //     posts.push({id: lastPostId, message: this._state.posts.inputValue})
        //
        //     this._state.posts.inputValue = '';
        //     this._subscriber(this._state);
        // }
        // if (action.type === 'ADD-NEW-MESSAGE-TEXT') {
        //     this._state.messages.messagesTextarea = action.value;
        //     this._subscriber(this._state);
        // }
        // if (action.type === 'ADD-NEW-USER-MESSAGE') {
        //     debugger
        //     const pushedNewElement = [...this._state.messages.messagesText, {
        //         id: 9,
        //         message: this._state.messages.messagesTextarea
        //     }]
        //
        //     const temp = {
        //         ...this._state,
        //         messages: {...this._state.messages, messagesText: pushedNewElement, messagesTextarea: ''}
        //     }
        //     this._state = temp;
        //     this._subscriber(this._state);
        // }

    }
}

export const addNewMessageTextAC = (value: string) => ({type: 'ADD-NEW-MESSAGE-TEXT', value: value})
export const addNewUserMessageAC = () => ({type: 'ADD-NEW-USER-MESSAGE'})
export const addNewPost = () => ({type: 'ADD_NEW_POST'})
export const addNewPostText = (value: string) => ({type: 'ADD_NEW_INPUT', inputValue: value})
export default store;
