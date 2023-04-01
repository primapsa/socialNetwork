
type ActionType = AddNewUserMessageACType | AddNewMessageTextACype
type AddNewUserMessageACType = ReturnType<typeof addNewUserMessageAC>
type AddNewMessageTextACype = ReturnType<typeof addNewMessageTextAC>

export const addNewMessageTextAC = (value: string) => ({type: 'ADD-NEW-MESSAGE-TEXT', value: value} as const)
export const addNewUserMessageAC = () => ({type: 'ADD-NEW-USER-MESSAGE'} as const)

const initial = {
    messageUser: [
        {id: 1, username: 'Vasya'},
        {id: 2, username: 'Igor'},
        {id: 3, username: 'Lena'},
        {id: 4, username: 'Mashs'},
        {id: 5, username: 'Sveta'},
        {id: 6, username: 'VAlera'},
        {id: 7, username: 'Sergey'},
        {id: 8, username: 'VAdim'},
    ],
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
export type MessagesStateType = {
    messageUser: MessageUserType[]
    messagesText: MessagesTextType[]
    messagesTextarea: string

}
type MessageUserType = {
    id: number
    username: string
}
type MessagesTextType = {
    id: number
    message: string
}
const messagesReducer = (state: MessagesStateType = initial, action: ActionType): MessagesStateType => {

    switch (action.type) {
        case 'ADD-NEW-MESSAGE-TEXT' :

            return {...state, messagesTextarea: action.value}

        case 'ADD-NEW-USER-MESSAGE' :

            const newMessage = {id: state.messagesText.length + 1, message: state.messagesTextarea}
            return {...state, messagesText: [...state.messagesText, newMessage], messagesTextarea: ''}

        default :
            return state;

    }
}

export default messagesReducer;