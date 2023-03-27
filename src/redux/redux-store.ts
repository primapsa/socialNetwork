import {combineReducers, createStore} from "redux";
import messagesReducer from "./messagesReducer";
import PostsReducer from "./postsReducer";
import usersReducer from "./usersReducer";


export type StateType = ReturnType<typeof rootReducer>

const rootReducer = combineReducers({
    messages: messagesReducer,
    posts: PostsReducer,
    users: usersReducer
})

export const store = createStore(rootReducer)
export default store