import React from "react";
import store, {StateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {followAC, setCurrentPageAC, setTotalCountAC, setUsersAC, unfollowAC, UsersType} from "../../redux/usersReducer";
import axios from "axios";
import Users from "./Users";


type UsersConatinerOuterPropsType = {
    users: UsersType[],
    userPerPage: number,
    totalCount: number
    currentPage: number
    follow: (id: number) => void
    unfollow: (id: number) => void
    setUsers: (users: UsersType[]) => void
    setCurrentPage: (page: number) => void
    setTotalCount: (totalCount: number) => void
}


class UsersContainer extends React.Component<UsersConatinerOuterPropsType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.userPerPage}`).then(response => {
            this.props.setTotalCount(response.data.totalCount)
            this.props.setUsers(response.data.items)
        })
    }
    onHandler = (page: number) => {

        this.props.setCurrentPage(page)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.userPerPage}`).then(response => {
            this.props.setUsers(response.data.items)
        })
    }

    render = () => {


        return (
            <>
                <Users  users={this.props.users}
                        userPerPage={this.props.userPerPage}
                        totalCount={this.props.totalCount}
                        follow={this.props.follow}
                        unfollow={this.props.unfollow}
                        currentPage={this.props.currentPage}
                        setPage={this.onHandler}
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
        currentPage: state.users.currentPage
    }
)
const mapDispatchToProps = (dispatch: Dispatch) => (
    {
        follow: (id: number) => dispatch(followAC(id)),
        unfollow: (id: number) => dispatch(unfollowAC(id)),
        setUsers: (users: UsersType[]) => dispatch(setUsersAC(users)),
        setCurrentPage: (page: number) => dispatch(setCurrentPageAC(page)),
        setTotalCount: (totalCount: number) => dispatch(setTotalCountAC(totalCount))
    })



export default connect(mapStateToProp, mapDispatchToProps)(UsersContainer)