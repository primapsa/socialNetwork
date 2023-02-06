import React from "react";
import styles from "./Header.module.css"

const Header = () => {
    return (
        <header className={styles.header}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/8/84/Mozilla_Firefox_3.5_logo.png?20130709084931"
                 alt=""/>
        </header>
    );
}
export default Header;