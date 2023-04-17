import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {StateType} from "../../redux/redux-store";
import {addNewPost, addNewPostText, setProfile} from "../../redux/postsReducer";
import {PostsInnerStateType, ProfileInnerType} from "../../types";
import axios from "axios";
import {log} from "util";
type ProfileContainerPropsTytpe = {
    profilePosts: PostsInnerStateType;
    addNewPost: () => void
    addNewPostText: (text: string) => void
    setProfile: (profile: ProfileInnerType | null) => void
}
class ProfileContainer extends React.Component<ProfileContainerPropsTytpe> {
    componentDidMount() {
        const userID = 2
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userID}`).then( response => this.props.setProfile(response.data))
    }

    render() {
        return <Profile state={this.props.profilePosts} addNewPost={this.props.addNewPost} addNewPostText={this.props.addNewPostText}/>
    }
}
const mapStateToProps = (state: StateType) => ({
 profilePosts: state.posts
})

export default connect(mapStateToProps, {addNewPost, addNewPostText, setProfile})(ProfileContainer);