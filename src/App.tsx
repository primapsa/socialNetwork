import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route, Router} from "react-router-dom";
import {StateType} from "./types";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

type AppPropsType = {};

function App (props: AppPropsType) {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div>
                    <Route path='/profile' component={Profile} />
                    <Route path='/messages' component={DialogsContainer} />
                </div>

            </div>
        </BrowserRouter>

    );
}

export default App;
