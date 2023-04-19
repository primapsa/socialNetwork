import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {StateType} from "../../redux/redux-store";
import {setUserAuth, UserAuthStateType} from "../../redux/authReducer";
import axios from "axios";
type HeaderContainerPropsType = {
    auth: UserAuthStateType
    setUserAuth: (data: UserAuthStateType) => void
}
class HeaderContainer extends React.Component<HeaderContainerPropsType> {
    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', {withCredentials: true}).then(
            resolve => {
                this.props.setUserAuth(resolve.data.data)
            }

        )
    }

    render() {
        return <Header auth={this.props.auth}/>
    }
}

const mapDispatchToProps = (state: StateType) => ({
    auth: state.auth
})
export default connect(mapDispatchToProps, {setUserAuth})(HeaderContainer);