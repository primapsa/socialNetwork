import React, {ChangeEvent, LegacyRef} from "react";
import Post from "../Post/Post";
import {addNewPost, addNewPostText, PostStateType} from "../../../redux/postsReducer";
import {Dispatch} from "redux";

type MyPostsPropsType = {
     state: PostStateType
     dispatch: Dispatch
 }
const MyPosts = ({state, dispatch}: MyPostsPropsType) => {
    const inputValue: LegacyRef<HTMLTextAreaElement> = React.createRef();

    const addPost = () => {
        dispatch(addNewPost());
    }
    const onChangeInputHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let newPostText = inputValue?.current?.value || '';
        dispatch(addNewPostText(newPostText));
    }

    return (
        <>
            <div>User Avatar + description</div>
            <div>
                <textarea ref={inputValue} value={state.inputValue} onChange={onChangeInputHandler}></textarea>
                <button onClick={addPost}>Add post</button>
            </div>
            {
                state.postsText.map(p => <Post key={p.id} id={p.id} message={p.message}/>)
            }

        </>
    );
}
export default MyPosts;