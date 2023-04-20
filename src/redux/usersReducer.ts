import {Dispatch} from "redux";
import {userAPI} from "../api/api";

export const follow = (id: number) => ({type: 'FOLLOW', payload: {id}} as const)
export const unfollow = (id: number) => ({type: 'UNFOLLOW', payload: {id}} as const)
export const setUsers = (users: UsersType[]) => ({type: 'SET-USERS', payload: {users}} as const)
export const setCurrentPage = (page: number) => ({type: 'SET-CURRENT-PAGE', payload: {page}} as const)
export const setTotalCount = (totalCount: number) => ({type: 'SET-TOTAL-COUNT', payload: {totalCount}} as const)
export const toggleMakingRequest = (isFetching: boolean, userID: number) => ({
    type: 'TOGGLE-MAKING-REQUEST',
    payload: {isFetching, userID}
} as const)

export const followThunk = (userID: number) => (dispatch: Dispatch) => {

    userAPI.followUser(userID).then(response => {
        if (response.resultCode === 0) {
            dispatch(follow(userID))
        }
        dispatch(toggleMakingRequest(false, userID))
    });
}
export const unfollowThunk = (userID: number) => (dispatch: Dispatch) => {
    userAPI.unfollowUser(userID)
        .then(response => {
            if (response.resultCode === 0) {
                unfollow(userID)
            }
            toggleMakingRequest(false, userID)
        })
}


type ActionType = FollowACType
    | UnFollowACType
    | SetUsersACType
    | setCurrentPageACType
    | setTotalCountACType
    | toggleMakingRequestType

type FollowACType = ReturnType<typeof follow>
type UnFollowACType = ReturnType<typeof unfollow>
type SetUsersACType = ReturnType<typeof setUsers>
type setCurrentPageACType = ReturnType<typeof setCurrentPage>
type setTotalCountACType = ReturnType<typeof setTotalCount>
type toggleMakingRequestType = ReturnType<typeof toggleMakingRequest>

const initial = {
    userPage: [],
    userPerPage: 10,
    totalCount: 0,
    currentPage: 1,
    makingRequestFor: []
}
export type UsersStateType = {
    userPage: UsersType[]
    userPerPage: number
    totalCount: number
    currentPage: number
    makingRequestFor: number[]
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
            return {
                ...state,
                userPage: state.userPage.map(user => user.id == action.payload.id ? {
                    ...user,
                    followed: true
                } : user)
            }
        case 'UNFOLLOW':
            return {
                ...state,
                userPage: state.userPage.map(user => user.id == action.payload.id ? {
                    ...user,
                    followed: false
                } : user)
            }
        case 'SET-USERS':
            return {...state, userPage: action.payload.users}

        case 'SET-CURRENT-PAGE':
            return {...state, currentPage: action.payload.page}

        case "SET-TOTAL-COUNT":
            return {...state, totalCount: action.payload.totalCount}

        case "TOGGLE-MAKING-REQUEST":
            return {
                ...state,
                makingRequestFor: action.payload.isFetching ? [...state.makingRequestFor, action.payload.userID]
                    : state.makingRequestFor.filter(e => e !== action.payload.userID)
            }
        default:
            return state;
    }

}

export default UsersReducer