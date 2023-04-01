import React, {ChangeEvent} from "react";
import styles from './Dialogs.module.css'
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import {addNewMessageTextAC, addNewUserMessageAC, MessagesStateType} from "../../redux/messagesReducer";
import {Dispatch} from "redux";


type DialogsPropsType = {
    state: MessagesStateType
    dispatch: Dispatch
}

const Dialogs = ({state, dispatch}: DialogsPropsType) => {

    const textareaHandler = (e: ChangeEvent<HTMLTextAreaElement>) =>
        dispatch(addNewMessageTextAC(e.currentTarget.value));
    const onclickHandler =() => dispatch(addNewUserMessageAC())


    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogItem}>
                {state.messageUser.map(user =>
                    <DialogItem
                        key={user.id}
                        id={user.id}
                        userName={user.username}
                    />
                )}
            </div>
            <div className={styles.messages}>
                {state.messagesText.map(message =>
                    <Message
                        key={message.id}
                        id={message.id}
                        message={message.message}
                    />
                )}
                <div className={styles.messagesText}>
                    <textarea
                        value={state.messagesTextarea}
                        onChange={textareaHandler}></textarea>
                    <button onClick={onclickHandler}>NEW MESSAGE</button>
                </div>
            </div>
        </div>

    )
}
export default Dialogs;