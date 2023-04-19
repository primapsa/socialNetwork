export const setUserAuth = (data: SetUserAuthAttributeType) => ({type: 'SET-USER-AUTH', payload: data} as const)
type SetUserAuthType = ReturnType<typeof setUserAuth>
type SetUserAuthAttributeType = Omit<UserAuthStateType, 'isAuth'>

export type UserAuthStateType = {
    id: number | null
    login: string | null
    email: string | null
    isAuth: boolean
}
const initial = {
    id: null,
    login: null,
    email: null,
    isAuth: false

}
type ActionType = SetUserAuthType;
const authReducer = (state: UserAuthStateType = initial, action: ActionType): UserAuthStateType => {

    switch (action.type) {
        case 'SET-USER-AUTH':{
            return {...state, ...action.payload, isAuth: true}
        }

        default:
            return state
    }
}
export default authReducer