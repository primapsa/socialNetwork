
export const followAC = (id: number) => ({type: 'FOLLOW', payload: {id}} as const)
export const unfollowAC = (id: number) => ({type: 'UNFOLLOW', payload: {id}} as const)
export const setUsersAC = (users: UsersType[]) => ({type: 'SET-USERS', payload: {users}} as const)
export const setCurrentPageAC = (page: number) => ({type: 'SET-CURRENT-PAGE', payload: {page}} as const)


type ActionType = FollowACType | UnFollowACType | SetUsersACType | setCurrentPageACType
type FollowACType = ReturnType<typeof followAC>
type UnFollowACType = ReturnType<typeof unfollowAC>
type SetUsersACType = ReturnType<typeof setUsersAC>
type setCurrentPageACType = ReturnType<typeof setCurrentPageAC>

const initial = {
    userPage: [],
    userPerPage: 10,
    totalCount: 50,
    currentPage: 1
}
export type UsersStateType = {
    userPage: UsersType[]
    userPerPage: number
    totalCount: number
    currentPage: number
}
export type UsersType = {
    id: number
    name: string
    followed: boolean
    photos: PhotoType
    status: string | null
    uniqueUrlName: string | null
    data?: userType
    place?: placeType
    isFollow?: boolean
}
type PhotoType = {
    small: string | null
    large: string | null
}

type userType = {
    firstName: string
    lastName: string
    photo: string
}
type placeType = {
    country: string;
    city: string
}
const UsersReducer = (state: UsersStateType = initial, action: ActionType): UsersStateType => {

    switch (action.type) {

        case 'FOLLOW':
         return {...state, userPage: state.userPage.map(user => user.id == action.payload.id ? {...user, followed: true} : user)}

        case 'UNFOLLOW':
            return {...state, userPage: state.userPage.map(user => user.id == action.payload.id ? {...user, followed: false} : user)}

        case 'SET-USERS':
            return {...state, userPage: action.payload.users}

        case 'SET-CURRENT-PAGE':
            return {...state, currentPage: action.payload.page}

        default :
            return state;
    }

}

export default UsersReducer