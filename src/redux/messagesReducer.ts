import {ActionTypeExtended, MessagesStateType} from "../types";

export const addNewMessageTextAC = (value: string) => ({type: 'ADD-NEW-MESSAGE-TEXT', value: value})
export const addNewUserMessageAC = () => ({type: 'ADD-NEW-USER-MESSAGE'})

const messagesReducer = (state:MessagesStateType , action: ActionTypeExtended): MessagesStateType => {

    switch (action.type) {
        case 'ADD-NEW-MESSAGE-TEXT' :
            state.messagesTextarea = action.value as string
            return state;
        case 'ADD-NEW-USER-MESSAGE' :
            const pushedNewElement = [...state.messagesText, {
                id: 9,
                message: state.messagesTextarea
            }]
            state.messagesText = pushedNewElement;
            state.messagesTextarea = '';
            return state;
        default :
            return state;

    }
}

export default messagesReducer;