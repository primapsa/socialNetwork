import React, {ChangeEvent, LegacyRef} from "react";
import Post from "../Post/Post";


type MyPostsPropsType = {
    state: PostsInnerStateType;
    addNewPost: () => void
    addNewPostText: (text: string) => void
 }
 type PostsInnerStateType = {
    postsText: PostsStateType[];
    inputValue: string;
    profile: ProfileInnerType | null
}
export type ProfileInnerType = {
    userId: number
    aboutMe: string
    fullName: string
    lookingForAJob: boolean
    lookingForAJobDescription: string
    contacts: Object
    photos: {
        small: string
        large: string
    }
}
type PostsStateType = {
    id: number;
    message: string;
}
const MyPosts = ({state, addNewPost,addNewPostText }: MyPostsPropsType) => {
    console.log(state)

    const inputValue: LegacyRef<HTMLTextAreaElement> = React.createRef();

    const addPost = () => {
        addNewPost()
    }
    const onChangeInputHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let newPostText = inputValue?.current?.value || '';
        // dispatch(addNewPostText(newPostText));
        addNewPostText(newPostText)
    }

    return (
        <>
            <div>
                <img src={state?.profile?.photos.large} alt=""/>
            </div>
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