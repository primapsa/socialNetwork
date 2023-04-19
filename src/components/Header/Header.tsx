import React from "react";
import styles from "./Header.module.css"
import {UserAuthStateType} from "../../redux/authReducer";
import Greeting from "./Greeting/Greeting";

type HeaderPropsType = {
    auth: UserAuthStateType
}
const Header = ({auth}: HeaderPropsType) => {

    return (
        <header className={styles.header}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/8/84/Mozilla_Firefox_3.5_logo.png?20130709084931"
                 alt=""/>
            <Greeting auth={auth}/>
        </header>
    );
}
export default Header;