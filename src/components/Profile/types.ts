import {ActionType, stateInType} from "../../types";


export type ProfilePropsType = {
    state: stateInType;
    dispatch: (action: ActionType) => void;
    // userPosts: UserPosts[];
    // addPost: (v: string) => void;
    // inputValue: string;
    // addNewInputValue: (v: string) => void;
}
export type UserPosts = {
    id: number;
    message: string;
}
export type MyPostsPropsType = {
    state: stateInType;
    dispatch: (action: ActionType) => void;
    // posts: UserPosts[];
    // addPost: (v: string) => void;
    // inputValue: string;
    // addNewInputValue: (v: string) => void;
}
