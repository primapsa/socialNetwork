import React from "react";
import {NavLink} from "react-router-dom";
import styles from './Dialogs.module.css'
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";

type DialogItemPropsType = {
    id: string;
    userName: string
}
type MessageType = {
    message: string;
}

const usersList = [
    {id: 1, username: 'Vasya'},
    {id: 2, username: 'Igor'},
    {id: 3, username: 'Lena'},
    {id: 4, username: 'Mashs'},
    {id: 5, username: 'Sveta'},
    {id: 6, username: 'VAlera'},
    {id: 7, username: 'Sergey'},
    {id: 8, username: 'VAdim'},
];
const messagesList = [
    {id: 1, message: 'Hello, how are you&'},
    {id: 2, message: 'What is going on?'},
    {id: 3, message: 'Nothing'},
    {id: 4, message: 'Good'},
    {id: 5, message: 'What is wrong?'},
    {id: 6, message: 'Dont worry'},
    {id: 7, message: 'Be happy'},
    {id: 8, message: 'Okay'},
]
const Dialogs = (props: DialogItemPropsType) => {
    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogItem}>
                {usersList.map(user => <DialogItem id={user.id} userName={user.username}/>)}
            </div>
            <div className={styles.messages}>
                {messagesList.map(message => <Message id={message.id} message={message.message}/>)}
            </div>
        </div>

    )
}
export default Dialogs;