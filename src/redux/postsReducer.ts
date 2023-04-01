import {PostsInnerStateType} from "../types";

export type ActionType = AddNewPostType | AddNewPostTextType
type AddNewPostType = ReturnType<typeof addNewPost>
type AddNewPostTextType = ReturnType<typeof addNewPostText>

export const addNewPost = () => ({type: 'ADD_NEW_POST'} as const)
export const addNewPostText = (value: string) => ({type: 'ADD_NEW_INPUT', inputValue: value} as const)

const initial = {
    postsText: [
        {id: 1, message: 'POST!!!!!'},
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
export type PostStateType = {
    postsText: PostTextType[]
    inputValue: string
}
type PostTextType = {
    id: number
    message: string
}
const PostsReducer = (state: PostStateType = initial, action: ActionType): PostStateType => {
    switch (action.type) {
        case 'ADD_NEW_INPUT':
            return {...state, inputValue: action.inputValue}
        case 'ADD_NEW_POST':
            const newMessage = {id: state.postsText.length + 1, message: state.inputValue}
            return {...state, postsText: [...state.postsText, newMessage], inputValue: ''}
        default :
            return state;
    }

}

export default PostsReducer