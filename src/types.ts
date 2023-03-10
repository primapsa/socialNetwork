import {UserPosts} from './components/Profile/types'

export type AppType = {
    state: stateInType
    dispatch: (action: ActionType) => void;
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
type PostsInnerStateType = {
    postsText: PostsStateType[];
    inputValue: string;
}
type UsersStateType = {
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
export type StoreType = {
    _state: stateInType;
    getState: () => stateInType;
    _subscriber: (arg: stateInType) => void;
    subscribe: (o: (arg: stateInType) => void) => void
    // addNewPost: (p: string) => void;
    // addNewInputValue: (v: string) => void;
    dispatch: (action: ActionType) => void;


}
