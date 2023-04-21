import {PostsInnerStateType, ProfileInnerType} from "../types";
import {Dispatch} from "redux";
import {profileAPI} from "../api/api";

export type ActionType = AddNewPostType | AddNewPostTextType | SetProfileType
type AddNewPostType = ReturnType<typeof addNewPost>
type AddNewPostTextType = ReturnType<typeof addNewPostText>
type SetProfileType = ReturnType<typeof setProfile>
export const addNewPost = () => ({type: 'ADD_NEW_POST'} as const)
export const addNewPostText = (value: string) => ({type: 'ADD_NEW_INPUT', inputValue: value} as const)
export const setProfile = (value: ProfileInnerType | null) => ({type: 'SET_PROFILE', profile: value} as const)

export const setProfileThunk = (userID: number) => (dispatch: Dispatch) => {
    profileAPI.getProfile(userID).then(response => dispatch(setProfile(response.data)))
}

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
    inputValue: '',
    profile: null
}
export type PostStateType = {
    postsText: PostTextType[]
    inputValue: string
    profile: ProfileInnerType | null
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
        case "SET_PROFILE":
            return {...state, profile: action.profile}
        default :
            return state;
    }

}

export default PostsReducer