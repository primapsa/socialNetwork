import React from "react";
import {connect} from "react-redux";
import MyPosts from "./MyPosts";
import {StateType} from "../../../redux/redux-store";
import {Dispatch} from "redux";


const mapStateToProps = (state: StateType) => ( { state } )
const mapDispatchToProps = (dispatch: Dispatch) => ({ dispatch })
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)
export default MyPostsContainer;