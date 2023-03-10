import {stateInType, StoreType} from "../types";




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
    _subscriber(observer){ console.log('Epmty')},
    // addNewPost(){
    //
    //     const posts = this.state.posts.postsText;
    //     const lastPostId = posts.length;
    //    posts.push({id: lastPostId, message: this.state.posts.inputValue})
    //
    //    this.state.posts.inputValue = '';
    //     this._subscriber(this.state);
    // },
    // addNewInputValue(inputValue: string){
    //
    //     this.state.posts.inputValue = inputValue;
    //     this._subscriber(this.state);
    // },
    subscribe(observer) {
        this._subscriber = observer;
    },
    dispatch (action){
        if(action.type === 'ADD_NEW_INPUT'){
            this._state.posts.inputValue = action.inputValue;
            this._subscriber(this._state);
        }
        if(action.type === 'ADD_NEW_POST'){
            const posts = this._state.posts.postsText;
            const lastPostId = posts.length;
            posts.push({id: lastPostId, message: this._state.posts.inputValue})

            this._state.posts.inputValue = '';
            this._subscriber(this._state);
        }
        if(action.type === 'ADD-NEW-MESSAGE-TEXT'){

        }
    }
}


export default store;
