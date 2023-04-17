import React from "react";
import store, {StateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {follow, setCurrentPage, setTotalCount, setUsers, unfollow, UsersType} from "../../redux/usersReducer";
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
// const mapDispatchToProps = (dispatch: Dispatch) => (
//     {
//         follow: (id: number) => dispatch(follow(id)),
//         unfollow: (id: number) => dispatch(unfollow(id)),
//         setUsers: (users: UsersType[]) => dispatch(setUsers(users)),
//         setCurrentPage: (page: number) => dispatch(setCurrentPage(page)),
//         setTotalCount: (totalCount: number) => dispatch(setTotalCount(totalCount))
//     })



export default connect(mapStateToProp, {follow, unfollow, setUsers, setCurrentPage, setTotalCount})(UsersContainer)