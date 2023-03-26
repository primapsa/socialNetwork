import React from 'react';
import './index.css';
import store from "./redux/state";
import App from "./App";
import {AppType, stateInType, StoreType} from "./types";
import ReactDOM from 'react-dom';


const rerenderTree = (state: any) => {
    ReactDOM.render(
        <App

            state={store.getState()}
            dispatch = {store.dispatch.bind(store)}
            // addPost={store.addNewPost.bind(store)}
            // inputValue={store.state.posts.inputValue}
            // addNewInputValue={store.addNewInputValue.bind(store)}
        />,
        document.getElementById('root')
    );
}
rerenderTree(store.getState());
store.subscribe(rerenderTree);

export default rerenderTree;


