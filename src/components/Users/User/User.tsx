import React from 'react';
import styles from './User.module.css'
import {UsersType} from "../../../redux/usersReducer";
import avatar from './../../../image/avatar.png'
import {NavLink} from "react-router-dom";
import axios from "axios";
import {userAPI} from "../../../api/api";

type UserPropsType = {
    user: UsersType
    follow: (id: number) => void
    unfollow: (id: number) => void
    toggleMakingRequest: (isFetching: boolean, userID: number) => void
    makingRequestFor: number[]
}

const User = ({user, follow, unfollow, toggleMakingRequest, makingRequestFor}: UserPropsType) => {

    const onclickHandler = () => {

        toggleMakingRequest(true, user.id)

        user.followed ? userAPI.unfollowUser(user.id)
                .then(response => {
                    if (response.resultCode === 0) {
                        unfollow(user.id)
                    }
                    toggleMakingRequest(false,user.id)
                }) :
            userAPI.followUser(user.id).then(response => {
                if (response.resultCode === 0) {
                    follow(user.id)
                }
                toggleMakingRequest(false,user.id)
            });
    }

    return (
        <div className={styles.user}>
            <div className={styles.row}>
                <NavLink to={`profile/${user.id}`}>
                    <img className={styles.avatar} src={user.photos.small ? user.photos.small : avatar} alt="logo"/>
                </NavLink>
                <button onClick={onclickHandler} disabled={makingRequestFor.some(e => e === user.id)}>{!user.followed ? 'FOLLOW' : 'UNFOLLOW'}</button>
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