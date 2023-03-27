import React from 'react';
import './index.css';
import store from "./redux/redux-store";
import App from "./App";
import {AppType, stateInType, StoreType} from "./types";
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";


ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>
    ,
    document.getElementById('root')
);






