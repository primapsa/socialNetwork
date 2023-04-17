import {UserPosts} from './components/Profile/types'

export type AppType = {
    state: stateInType
    dispatch: (action: ActionTypeExtended) => void;
}
export type StateType = {
    state: stateInType;

    addPost: (v: string) => void;
    inputValue: string;
    addNewInputValue: (v: string) => void;
}

export type stateInType = {
    users: UsersStateType[];
    posts: PostsInnerStateType;
    messages: MessagesStateType;
}
export type PostsInnerStateType = {
    postsText: PostsStateType[];
    inputValue: string;
    profile: ProfileInnerType | null
}
export type ProfileInnerType = {
    userId: number
    aboutMe: string
    fullName: string
    lookingForAJob: boolean
    lookingForAJobDescription: string
    contacts: Object
    photos: {
        small: string
        large: string
    }
}
export type UsersStateType = {
    id: number;
    username: string;
}
type PostsStateType = {
    id: number;
    message: string;
}
export type MessagesStateInnerType = {
    id: number;
    message: string;
}
export type MessagesStateType = {
    messagesText: MessagesStateInnerType[]
    messagesTextarea: string
}
export type ProfileType = {
    usersList: any;
    messagesList: any;
}
export type  ActionType = {
    [keys: string]: string
}
export type ActionTypeExtended = {
    type: string
    inputValue?: string
    value?: string

}
export type StoreType = {
    _state: any;
    getState: () => stateInType;
    _subscriber: (arg: stateInType) => void;
    subscribe: (o: (arg: stateInType) => void) => void
    // addNewPost: (p: string) => void;
    // addNewInputValue: (v: string) => void;
    dispatch: (action: ActionTypeExtended) => void;


}
