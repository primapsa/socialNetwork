import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter, Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";

type AppPropsType = {};

function App (props: AppPropsType) {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar/>
                <div>
                    <Route path='/profile/:userId?' component={ProfileContainer} />
                    <Route path='/messages' component={DialogsContainer} />
                    <Route path='/users' component={UsersContainer} />
                </div>

            </div>
        </BrowserRouter>

    );
}

export default App;
