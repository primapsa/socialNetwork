import React from "react";
import styles from "./ProfileInfo.module.css"
import {PostsInnerStateType} from "../../../types";

type ProfileInfoPropsType = {
    userInfo: PostsInnerStateType
}

const ProfileInfo = ({userInfo}:ProfileInfoPropsType) => {
    return (
        <>
            <div className={styles.header}>
                <img className={styles.img}
                     src="https://gamerwall.pro/uploads/posts/2022-03/1648497221_1-gamerwall-pro-p-fioletovii-fon-dlya-shapki-krasivie-1.jpg"
                     alt=""/>
            </div>
            <div>
                <img src={userInfo?.profile?.photos.large} alt=""/>
                <h4>{userInfo.profile?.fullName}</h4>
            </div>
        </>


    );
}
export default ProfileInfo;