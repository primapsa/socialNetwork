import React from "react";
import store, {StateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {
    follow, followThunk,
    setCurrentPage,
    setTotalCount,
    setUsers,
    toggleMakingRequest,
    unfollow, unfollowThunk,
    UsersType
} from "../../redux/usersReducer";
import axios from "axios";
import Users from "./Users";
import {userAPI} from "../../api/api";


type UsersConatinerOuterPropsType = {
    users: UsersType[],
    userPerPage: number,
    totalCount: number
    currentPage: number
    setUsers: (users: UsersType[]) => void
    setCurrentPage: (page: number) => void
    setTotalCount: (totalCount: number) => void
    toggleMakingRequest: (isFetching: boolean, userID: number) => void
    makingRequestFor: number[]
    followThunk: (id: number) => void
    unfollowThunk: (id: number) => void
}


class UsersContainer extends React.Component<UsersConatinerOuterPropsType> {

    componentDidMount() {
        userAPI.getUser(this.props.currentPage,this.props.userPerPage ).then(response => {
            this.props.setTotalCount(response.data.totalCount)
            this.props.setUsers(response.data.items)
        })
    }
    onHandler = (page: number) => {
        this.props.setCurrentPage(page)
        userAPI.getUser(page,this.props.userPerPage ).then(response => {
            this.props.setUsers(response.data.items)
        })
    }

    render = () => {
        return (
            <>
                <Users  users={this.props.users}
                        userPerPage={this.props.userPerPage}
                        totalCount={this.props.totalCount}
                        follow={this.props.followThunk}
                        unfollow={this.props.unfollowThunk}
                        currentPage={this.props.currentPage}
                        setPage={this.onHandler}
                        toggleMakingRequest = {this.props.toggleMakingRequest}
                        makingRequestFor = {this.props.makingRequestFor}
                />
            </>
        );
    }
}


const mapStateToProp = (state: StateType) => (
    {
        users: state.users.userPage,
        userPerPage: state.users.userPerPage,
        totalCount: state.users.totalCount,
        currentPage: state.users.currentPage,
        makingRequestFor: state.users.makingRequestFor
    }
)




export default connect(mapStateToProp, {setUsers, setCurrentPage, setTotalCount, toggleMakingRequest, followThunk, unfollowThunk})(UsersContainer)