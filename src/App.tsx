import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route, Router} from "react-router-dom";
import {AppType, StateType} from "./types";



function App({state, dispatch}: AppType) {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div>
                    <Route path='/profile'
                           render={() => <Profile
                               dispatch = {dispatch}
                               state = {state}
                               // userPosts={props.state.posts.postsText}
                               // dispatch = {props.dispatch}
                               // state = {props.state}
                               // addPost={props.addPost}
                               // inputValue={props.state.posts.inputValue}
                               // addNewInputValue={props.addNewInputValue}
                           />}/>
                    <Route path='/messages'
                           render={() =>
                               <Dialogs
                                   state={state}
                                   dispatch={dispatch}
                               />}/>
                </div>

            </div>
        </BrowserRouter>

    );
}

export default App;
