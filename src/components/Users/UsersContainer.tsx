import React from "react";
import {StateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {
    followThunk,
    getUserSetThunk,
    getUsersThunk,
    setCurrentPage,
    setTotalCount,
    setUsers,
    toggleMakingRequest,
    unfollowThunk,
    UsersType
} from "../../redux/usersReducer";
import Users from "./Users";


type UsersConatinerOuterPropsType = {
    users: UsersType[],
    userPerPage: number,
    totalCount: number
    currentPage: number
    setUsers: (users: UsersType[]) => void
    setCurrentPage: (page: number) => void
    toggleMakingRequest: (isFetching: boolean, userID: number) => void
    makingRequestFor: number[]
    followThunk: (id: number) => void
    unfollowThunk: (id: number) => void
    getUsersThunk: (page: number, count: number) => void
    getUserSetThunk: (page: number, count: number) => void
}


class UsersContainer extends React.Component<UsersConatinerOuterPropsType> {

    componentDidMount() {
        this.props.getUsersThunk(this.props.currentPage, this.props.userPerPage)
    }

    onHandler = (page: number) => {
        this.props.setCurrentPage(page)
        this.props.getUserSetThunk(page, this.props.userPerPage)
    }

    render = () => {
        return (
            <>
                <Users users={this.props.users}
                       userPerPage={this.props.userPerPage}
                       totalCount={this.props.totalCount}
                       follow={this.props.followThunk}
                       unfollow={this.props.unfollowThunk}
                       currentPage={this.props.currentPage}
                       setPage={this.onHandler}
                       toggleMakingRequest={this.props.toggleMakingRequest}
                       makingRequestFor={this.props.makingRequestFor}
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


export default connect(mapStateToProp, {
    setUsers,
    setCurrentPage,
    setTotalCount,
    toggleMakingRequest,
    followThunk,
    unfollowThunk,
    getUsersThunk,
    getUserSetThunk
})(UsersContainer)