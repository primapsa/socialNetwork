import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {ActionTypeExtended, PostsInnerStateType, stateInType} from "../../types";
import MyPosts from "./MyPosts/MyPosts";
import {addNewPost, addNewPostText} from "../../redux/postsReducer";

export type ProfilePropsType = {
    state: PostsInnerStateType;
    addNewPost: () => void
    addNewPostText: (text: string) => void

}
const Profile = ({state,addNewPost,addNewPostText  }: ProfilePropsType) => {

    return (
        <div className='content'>
            <ProfileInfo userInfo={state}/>
            <MyPosts state={state} addNewPost={addNewPost} addNewPostText={addNewPostText} />
        </div>
    );
}
export default Profile;