import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {StateType} from "../../redux/redux-store";
import {setUserAuth, UserAuthStateType} from "../../redux/authReducer";
import axios from "axios";
import {authAPI} from "../../api/api";
type HeaderContainerPropsType = {
    auth: UserAuthStateType
    setUserAuth: (data: UserAuthStateType) => void
}
class HeaderContainer extends React.Component<HeaderContainerPropsType> {
    componentDidMount() {
        authAPI.me().then( resolve => this.props.setUserAuth(resolve.data))
    }

    render() {
        return <Header auth={this.props.auth}/>
    }
}

const mapDispatchToProps = (state: StateType) => ({
    auth: state.auth
})
export default connect(mapDispatchToProps, {setUserAuth})(HeaderContainer);