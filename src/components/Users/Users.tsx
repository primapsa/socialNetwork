import React from 'react';
import {unfollowAC, UsersStateType} from "../../redux/usersReducer";
import User from "./User/User";

type UsersPropsType = {
    users: UsersStateType[]
    follow: (id: number) => void
    unfollow: (id: number) => void
}

const  Users = ({users, follow, unfollow}: UsersPropsType) => {

    const allUsers = users.map( u =>
        <User key={u.id} user={u} follow={follow} unfollow={unfollow} />)
    return (
        <>
            {allUsers}
        </>
    );
}

export default Users;