import React from "react";
import styles from "./Profile.module.css"
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ProfileType} from "../../types";
import {ProfilePropsType} from "./types";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props: ProfilePropsType) => {
    return (
        <div className='content'>
            <ProfileInfo/>
            <MyPostsContainer/>
            {/*<MyPosts*/}
            {/*    state = {props.state}*/}
            {/*    dispatch = {props.dispatch}*/}
            {/*    // posts={props.userPosts}*/}
            {/*    // addPost={props.addPost}*/}
            {/*    // inputValue={props.inputValue}*/}
            {/*    // addNewInputValue={props.addNewInputValue}*/}
            {/*/>*/}
        </div>
    );
}
export default Profile;