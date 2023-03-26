import {ActionTypeExtended, MessagesStateType} from "../types";


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