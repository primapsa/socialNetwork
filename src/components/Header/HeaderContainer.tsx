import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {StateType} from "../../redux/redux-store";
import {authThunk, setUserAuth, UserAuthStateType} from "../../redux/authReducer";
import axios from "axios";
import {authAPI} from "../../api/api";

type HeaderContainerPropsType = {
    auth: UserAuthStateType
    authThunk: () => any
}

class HeaderContainer extends React.Component<HeaderContainerPropsType> {
    componentDidMount() {
        this.props.authThunk()
    }

    render() {
        return <Header auth={this.props.auth}/>
    }
}

const mapDispatchToProps = (state: StateType) => ({
    auth: state.auth
})
export default connect(mapDispatchToProps, {authThunk})(HeaderContainer);