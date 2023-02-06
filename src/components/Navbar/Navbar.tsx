import React from "react";
import styles from "./Navbar.module.css"
const Navbar = () => {
    return (
        <nav className={styles.nav}>
            <div>
                <a href="samurai-way/src/components">Profile</a>
            </div>
            <div>
                <a href="samurai-way/src/components">Messages</a>
            </div>
            <div>
                <a href="samurai-way/src/components">News</a>
            </div>
            <div>
                <a href="samurai-way/src/components">Music</a>
            </div>
            <div>
                <a href="samurai-way/src/components">Settings</a>
            </div>
        </nav>
    );
}
export default Navbar;