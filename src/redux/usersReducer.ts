
export const followAC = (id: number) => ({type: 'FOLLOW', payload: {id}} as const)
export const unfollowAC = (id: number) => ({type: 'UNFOLLOW', payload: {id}} as const)

type ActionType = FollowACType | UnFollowACType
type FollowACType = ReturnType<typeof followAC>
type UnFollowACType = ReturnType<typeof unfollowAC>

const initial = [
    {
        id: 1,
        data: {firstName: 'Kolya', lastName: 'Ivanov', photo: 'https://us.123rf.com/450wm/tuktukdesign/tuktukdesign1606/tuktukdesign160600107/59070188-user-icon-mann-profil-gesch%C3%A4ftsmann-avatar-person-symbol-in-vektor-illustration.jpg'},
        place: {country: 'Belarus', city: 'Minsk'},
        status: 'Here i am',
        isFollow: true
    },{
        id: 2,
        data: {firstName: 'Kolyaaaa', lastName: 'Ivanaaaaov', photo: 'https://us.123rf.com/450wm/tuktukdesign/tuktukdesign1606/tuktukdesign160600107/59070188-user-icon-mann-profil-gesch%C3%A4ftsmann-avatar-person-symbol-in-vektor-illustration.jpg'},
        place: {country: 'Belarus', city: 'Minsk'},
        status: 'Here i am',
        isFollow: false
    },{
        id: 3,
        data: {firstName: 'Kodfdlya', lastName: 'Ivadsfdnov', photo: 'https://us.123rf.com/450wm/tuktukdesign/tuktukdesign1606/tuktukdesign160600107/59070188-user-icon-mann-profil-gesch%C3%A4ftsmann-avatar-person-symbol-in-vektor-illustration.jpg'},
        place: {country: 'Belarus', city: 'Minsk'},
        status: 'Here i am',
        isFollow: true
    }
]
export type UsersStateType = {
    id: number
    data: userType
    place: placeType
    status: string
    isFollow: boolean
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
const UsersReducer = (state: UsersStateType[] = initial, action: ActionType): UsersStateType[] => {

    switch (action.type) {

        case 'FOLLOW':
         return state.map(user => user.id == action.payload.id ? {...user, isFollow: true} : user)

        case 'UNFOLLOW':
            return state.map(user => user.id == action.payload.id ? {...user, isFollow: false} : user)

        default :
            return state;
    }

}

export default UsersReducer