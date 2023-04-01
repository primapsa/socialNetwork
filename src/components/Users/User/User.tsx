import React from 'react';
import styles from './User.module.css'
import {UsersStateType} from "../../../redux/usersReducer";

type UserPropsType = {
    user: UsersStateType
    follow: (id: number) => void
    unfollow: (id: number) => void
}

const User = ({user, follow, unfollow}: UserPropsType) => {
    const onclickHandler = () => {

        user.isFollow ? unfollow(user.id) : follow(user.id)
    }
    return (
        <div className={styles.user}>
            <div className={styles.row}>
                <img className={styles.avatar} src={user.data.photo} alt="logo"/>
                <button onClick={onclickHandler}>{user.isFollow ? 'FOLLOW' : 'UNFOLLOW'}</button>
            </div>
            <div className={styles.row}>
                <span>{user.data.firstName + ' ' + user.data.lastName}</span>
            </div>
            <div className={styles.row}>
                <span>{user.place.country}</span>
                <span>{user.place.city}</span>
            </div>
        </div>
    );
};

export default User;