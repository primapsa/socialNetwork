import React from 'react';
import {UsersType} from "../../redux/usersReducer";
import User from "./User/User";
import s from './Users.module.css'


type UsersPropsType = {
    users: UsersType[]
    userPerPage: number,
    totalCount: number
    follow: (id: number) => void
    unfollow: (id: number) => void
    currentPage: number
    setPage: (page: number) => void

}
export const Users = (props: UsersPropsType) => {

    const pages = Math.ceil(props.totalCount / props.userPerPage)
    const pagesCount = Array.from({length: pages}, (v, i) => i + 1)
    const allUsers = props.users.map(u =>
        <User key={u.id} user={u} follow={props.follow} unfollow={props.unfollow}/>)

    const pagination = pagesCount.map(e => <span key={e}
        onClick={() => props.setPage(e)}
        className={e === props.currentPage ? s.active : ''}>{e}</span>)
    return (
        <>
            <div className={s.pagination}>{pagination}</div>
            {allUsers}
        </>
    )

}
export default Users;