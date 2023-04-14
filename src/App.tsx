import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {BrowserRouter, Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";

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
                    <Route path='/users' component={UsersContainer} />
                </div>

            </div>
        </BrowserRouter>

    );
}

export default App;
