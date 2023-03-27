import React from 'react';
import './index.css';
import store from "./redux/redux-store";
import App from "./App";
import {AppType, stateInType, StoreType} from "./types";
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";


const rerenderTree = (state: any) => {
    ReactDOM.render(
       <Provider store={store}>
           <App
               // state={store.getState()}
               // dispatch = {store.dispatch.bind(store)}

           />
       </Provider>
        ,
        document.getElementById('root')
    );
}
rerenderTree(store.getState());
store.subscribe(() => rerenderTree(store.getState()));

export default rerenderTree;


