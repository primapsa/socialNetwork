import React from "react";
import styles from "./MyPosts.module.css"
import Post from "../Post/Post";

const MyPosts = () => {
    return (
        <>
            <div>User Avatar + description</div>
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <Post message ="Hello, how are you?"/>
            <Post message = "It is my first post!"/>
            <Post/>
        </>
    );
}
export default MyPosts;