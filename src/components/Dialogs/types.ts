import {ActionType, ProfileType, stateInType} from "../../types";

export type DialogsType = {
    state: stateInType;
    dispatch: (action: ActionType) => void;
}
type UserListType = {
    id: number;
    username: string
}
export type MessagePropsType = {
    id: number;
    message: string;
}
export type  DialogItemPropsType = {
    id: number;
    userName: string
}