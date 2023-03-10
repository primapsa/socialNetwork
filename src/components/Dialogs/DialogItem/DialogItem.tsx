import React from "react";
import {NavLink} from "react-router-dom";
import styles from './DialogItem.module.css'
import {DialogItemPropsType} from "../types";


const DialogItem = (props:DialogItemPropsType ) => {

    return (
        <div>
            <NavLink to={`/messages/${props.id}`}>{props.userName}</NavLink>
        </div>
    )
}

export default DialogItem;