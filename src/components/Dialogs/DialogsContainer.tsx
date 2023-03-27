import React from "react";
import {connect} from "react-redux";
import Dialogs from "./Dialogs";
import {StateType} from "../../redux/redux-store";
import {Dispatch} from "redux";

const mapStateToProps = (state: StateType) => {
    return {
        state
    }
}
const mapDispatchStateToProps = (dispatch: Dispatch) => {
    return {
        dispatch
    }
}
const DialogsContainer = connect(mapStateToProps, mapDispatchStateToProps)(Dialogs)
export default DialogsContainer;