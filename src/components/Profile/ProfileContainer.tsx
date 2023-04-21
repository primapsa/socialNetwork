import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {StateType} from "../../redux/redux-store";
import {addNewPost, addNewPostText, setProfileThunk} from "../../redux/postsReducer";
import {PostsInnerStateType} from "../../types";

import {RouteComponentProps, withRouter} from "react-router-dom";

type MatchParamType = {
    userId: string
}

type ProfileContainerPropsTytpe = RouteComponentProps<MatchParamType> & {
    profilePosts: PostsInnerStateType;
    addNewPost: () => void
    addNewPostText: (text: string) => void
    setProfileThunk: (userID: number) => void

}

class ProfileContainer extends React.Component<ProfileContainerPropsTytpe> {
    componentDidMount() {
        const userID = Number(this.props.match.params.userId)
        this.props.setProfileThunk(userID)
    }

    render() {
        return <Profile state={this.props.profilePosts} addNewPost={this.props.addNewPost}
                        addNewPostText={this.props.addNewPostText}/>
    }
}

const mapStateToProps = (state: StateType) => ({
    profilePosts: state.posts
})
const ProfileContainerWithRouter = withRouter(ProfileContainer)
export default connect(mapStateToProps, {addNewPost, addNewPostText, setProfileThunk})(ProfileContainerWithRouter);