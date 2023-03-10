import React, {ChangeEvent, LegacyRef, useRef} from "react";
import styles from "./MyPosts.module.css"
import Post from "../Post/Post";
import {MyPostsPropsType, UserPosts} from "../types";
import {log} from "util";

const MyPosts = ({dispatch, state}:MyPostsPropsType) => {
    const inputValue: LegacyRef<HTMLTextAreaElement> = React.createRef();
    const {posts} = state;
    const calue = inputValue?.current?.value || '';
    const addPost = () => {

      //  props.addPost(calue);
        dispatch({type: 'ADD_NEW_POST'})
    }
    const onChangeInputHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let caluee = inputValue?.current?.value || '';
       dispatch({type: 'ADD_NEW_INPUT', inputValue: caluee })
       // props.addNewInputValue(caluee);
    }

    return (
        <>
            <div>User Avatar + description</div>
            <div>
                <textarea ref={inputValue} value={posts.inputValue} onChange={onChangeInputHandler}></textarea>
                <button onClick={addPost}>Add post</button>
            </div>
            {
               posts.postsText.map(p => <Post key={p.id} id={p.id} message={p.message}/>)
            }

        </>
    );
}
export default MyPosts;