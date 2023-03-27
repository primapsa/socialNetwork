import {ActionTypeExtended, MessagesStateType} from "../types";

export const addNewMessageTextAC = (value: string) => ({type: 'ADD-NEW-MESSAGE-TEXT', value: value})
export const addNewUserMessageAC = () => ({type: 'ADD-NEW-USER-MESSAGE'})
const initial = {
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
    }
const messagesReducer = (state:MessagesStateType = initial , action: ActionTypeExtended): MessagesStateType => {

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