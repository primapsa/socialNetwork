import React, {MouseEventHandler} from 'react';
import {unfollowAC, UsersType} from "../../redux/usersReducer";
import User from "./User/User";
import s from './Users.module.css'
import axios from "axios";
import {log} from "util";


type UsersPropsType = {
    users: UsersType[],
    userPerPage: number,
    totalCount: number
    currentPage: number
    follow: (id: number) => void
    unfollow: (id: number) => void
    setUsers: (users: UsersType[]) => void
    setCurrentPage: (page: number) => void
}
const initial = [
    {
        id: 1,
        data: {
            firstName: 'Kolya',
            lastName: 'Ivanov',
            photo: 'https://us.123rf.com/450wm/tuktukdesign/tuktukdesign1606/tuktukdesign160600107/59070188-user-icon-mann-profil-gesch%C3%A4ftsmann-avatar-person-symbol-in-vektor-illustration.jpg'
        },
        place: {country: 'Belarus', city: 'Minsk'},
        status: 'Here i am',
        isFollow: true
    }, {
        id: 2,
        data: {
            firstName: 'Kolyaaaa',
            lastName: 'Ivanaaaaov',
            photo: 'https://us.123rf.com/450wm/tuktukdesign/tuktukdesign1606/tuktukdesign160600107/59070188-user-icon-mann-profil-gesch%C3%A4ftsmann-avatar-person-symbol-in-vektor-illustration.jpg'
        },
        place: {country: 'Belarus', city: 'Minsk'},
        status: 'Here i am',
        isFollow: false
    }, {
        id: 3,
        data: {
            firstName: 'Kodfdlya',
            lastName: 'Ivadsfdnov',
            photo: 'https://us.123rf.com/450wm/tuktukdesign/tuktukdesign1606/tuktukdesign160600107/59070188-user-icon-mann-profil-gesch%C3%A4ftsmann-avatar-person-symbol-in-vektor-illustration.jpg'
        },
        place: {country: 'Belarus', city: 'Minsk'},
        status: 'Here i am',
        isFollow: true
    }
]
// const Users = ({users, follow, unfollow, setUsers}: UsersPropsType) => {
//     if (users.length === 0) {
//         axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
//             setUsers(response.data.items)
//         })
//     }
//     const allUsers = users.map(u =>
//         <User key={u.id} user={u} follow={follow} unfollow={unfollow}/>)
//     return (
//         <>
//             {allUsers}
//         </>
//     );
// }

class Users extends React.Component<UsersPropsType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users`).then(response => {
            // this.props.totalCount = response.data.totalCount
            this.props.setUsers(response.data.items)

        })
    }

    render = () => {
        const pages = Math.ceil(this.props.totalCount / this.props.userPerPage)
        const pagesCount = Array.from({length: pages}, (v, i) => i + 1)
        const onHandler = (e: React.MouseEvent<HTMLSpanElement>) => {

            this.props.setCurrentPage(+e.currentTarget.innerText)
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}`).then(response => {
                // this.props.totalCount = response.data.totalCount
                this.props.setUsers(response.data.items)

            })
        }

        const allUsers = this.props.users.map(u =>
            <User key={u.id} user={u} follow={this.props.follow} unfollow={this.props.unfollow}/>)

        const pagination = pagesCount.map(e => <span
            onClick={onHandler}
            className={e === this.props.currentPage ? s.active : ''}>{e}</span>)

        return (
            <>
                <div>{pagination}</div>
                {allUsers}
            </>
        );
    }
}

export default Users;