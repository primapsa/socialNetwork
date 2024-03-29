import {applyMiddleware, combineReducers, createStore} from "redux";
import messagesReducer from "./messagesReducer";
import PostsReducer from "./postsReducer";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";
import thunk from "redux-thunk";


export type StateType = ReturnType<typeof rootReducer>

const rootReducer = combineReducers({
    messages: messagesReducer,
    posts: PostsReducer,
    users: usersReducer,
    auth: authReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))
export default store