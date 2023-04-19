import React from 'react';
import {UserAuthStateType} from "../../../redux/authReducer";
import {NavLink} from "react-router-dom";

type GreetingPropsType = {
    auth: UserAuthStateType
}
const Greeting = ({auth}: GreetingPropsType) => {
    return (
        <div>
            { auth.isAuth ? <span>{`Hello, ${auth.login}`}</span> : <NavLink to={'login'}>Login</NavLink>}
        </div>
    );
};

export default Greeting;