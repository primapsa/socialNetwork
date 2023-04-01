import store, {StateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import Users from "./Users";
import {Dispatch} from "redux";
import {followAC, unfollowAC} from "../../redux/usersReducer";

const mapStateToProp = (state: StateType) => ({users: state.users})
const mapDispatchToProps = (dispatch: Dispatch) => (
    {
        follow: (id: number) => dispatch(followAC(id)),
        unfollow: (id: number) => dispatch(unfollowAC(id)),
    })


const UsersContainer = connect(mapStateToProp, mapDispatchToProps)(Users)
export default UsersContainer