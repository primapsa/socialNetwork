import React from "react";
import styles from './Message.module.css'

type MessageType = {
    message: string;
    id: number;
}

const Message = (props: MessageType) => {
    return (
        <div className={`Msg ${props.id}`}>{props.message}</div>
    )
}

export default Message;