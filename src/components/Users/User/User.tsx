import React from 'react';
import styles from './User.module.css'
import {UsersType} from "../../../redux/usersReducer";
import avatar from './../../../image/avatar.png'

type UserPropsType = {
    user: UsersType
    follow: (id: number) => void
    unfollow: (id: number) => void
}

const User = ({user, follow, unfollow}: UserPropsType) => {
    const onclickHandler = () => {

        user.followed ? unfollow(user.id) : follow(user.id)
    }
    return (
        <div className={styles.user}>
            <div className={styles.row}>
                <img className={styles.avatar} src={user.photos.small ? user.photos.small : avatar } alt="logo"/>
                <button onClick={onclickHandler}>{user.followed ? 'FOLLOW' : 'UNFOLLOW'}</button>
            </div>
            <div className={styles.row}>
                <span>{user.name}</span>
            </div>
            <div className={styles.row}>
                <span>{user.status}</span>
                <span>{user.uniqueUrlName}</span>
            </div>
        </div>
    );
};

export default User;