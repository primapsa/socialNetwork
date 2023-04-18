import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {StateType} from "../../redux/redux-store";
import {addNewPost, addNewPostText, setProfile} from "../../redux/postsReducer";
import {PostsInnerStateType, ProfileInnerType} from "../../types";
import axios from "axios";

import {RouteComponentProps, withRouter} from "react-router-dom";

type MatchParamType = {
    userId: string
}

type ProfileContainerPropsTytpe = RouteComponentProps<MatchParamType> & {
    profilePosts: PostsInnerStateType;
    addNewPost: () => void
    addNewPostText: (text: string) => void
    setProfile: (profile: ProfileInnerType | null) => void

}

class ProfileContainer extends React.Component<ProfileContainerPropsTytpe> {
    componentDidMount() {
        const userID = this.props.match.params.userId
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userID}`).then( response => this.props.setProfile(response.data))
    }

    render() {
        return <Profile state={this.props.profilePosts} addNewPost={this.props.addNewPost} addNewPostText={this.props.addNewPostText}/>
    }
}
const mapStateToProps = (state: StateType) => ({
 profilePosts: state.posts
})
const ProfileContainerWithRouter = withRouter(ProfileContainer)
export default connect(mapStateToProps, {addNewPost, addNewPostText, setProfile})(ProfileContainerWithRouter);