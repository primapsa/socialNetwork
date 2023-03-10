import React from "react";
import {MessagePropsType} from "../types";



const Message = (props: MessagePropsType) => {

    return (
        <div className={`Msg ${props.id}`}>{props.message}</div>
    )
}

export default Message;