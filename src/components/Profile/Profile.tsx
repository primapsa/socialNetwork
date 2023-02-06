import React from "react";
import styles from "./Profile.module.css"
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div className='content'>
            <div className={styles.header}>
                <img className={styles.img}
                    src="https://gamerwall.pro/uploads/posts/2022-03/1648497221_1-gamerwall-pro-p-fioletovii-fon-dlya-shapki-krasivie-1.jpg"
                    alt=""/>
            </div>
            <MyPosts />
        </div>
    );
}
export default Profile;