import React, {ChangeEvent} from "react";
import {NavLink} from "react-router-dom";
import styles from './Dialogs.module.css'
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import {DialogsType} from "./types";
import {addNewMessageTextAC, addNewUserMessageAC} from "../../redux/state";


const Dialogs = ({state, dispatch}: DialogsType) => {

    const textareaHandler = (e: ChangeEvent<HTMLTextAreaElement>) =>
        dispatch(addNewMessageTextAC(e.currentTarget.value));
    const onclickHandler =() => dispatch(addNewUserMessageAC())
    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogItem}>
                {state.users.map(user =>
                    <DialogItem
                        key={user.id}
                        id={user.id}
                        userName={user.username}
                    />
                )}
            </div>
            <div className={styles.messages}>
                {state.messages.messagesText.map(message =>
                    <Message
                        key={message.id}
                        id={message.id}
                        message={message.message}
                    />
                )}
                <div className={styles.messagesText}>
                    <textarea
                        value={state.messages.messagesTextarea}
                        onChange={textareaHandler}></textarea>
                    <button onClick={onclickHandler}>NEW MESSAGE</button>
                </div>
            </div>
        </div>

    )
}
export default Dialogs;