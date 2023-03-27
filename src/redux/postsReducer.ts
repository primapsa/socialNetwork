import {ActionTypeExtended, PostsInnerStateType} from "../types";

export const addNewPost = () => ({type: 'ADD_NEW_POST'})
export const addNewPostText = (value: string) => ({type: 'ADD_NEW_INPUT', inputValue: value})
const initial = {
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
const PostsReducer = (state : PostsInnerStateType = initial, action: ActionTypeExtended): PostsInnerStateType => {
    switch (action.type) {
        case 'ADD_NEW_INPUT':
            state.inputValue = action.inputValue as string
            return state;
        case 'ADD_NEW_POST':
            state.postsText.push({id: 6, message: state.inputValue})
            state.inputValue = '';
            return state;
        default :
            return state;
    }

}
export default PostsReducer