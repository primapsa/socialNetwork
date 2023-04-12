import store, {StateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import Users from "./Users";
import {Dispatch} from "redux";
import {followAC, setCurrentPageAC, setUsersAC, unfollowAC, UsersType} from "../../redux/usersReducer";

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
        setCurrentPage: (page: number) => dispatch(setCurrentPageAC(page))
    })


const UsersContainer = connect(mapStateToProp, mapDispatchToProps)(Users)
export default UsersContainer