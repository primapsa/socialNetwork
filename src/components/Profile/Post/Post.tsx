import React from "react";
import styles from "./Post.module.css"
import {UserPosts} from "../types";

const Post = (props: UserPosts) => {
    return (
        <>
            <div className={styles.container}>
                <img className={styles.image}
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3GKhmESwuKPOwOBeW9ghr-5fzuGHcqEj8aw&usqp=CAU "
                    alt=""/>
                <p className={styles.text}>{props.message}</p>
                <span className={styles.action}>Like</span>
            </div>

        </>
    );
}
export default Post;