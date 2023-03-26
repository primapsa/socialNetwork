import {ActionTypeExtended, PostsInnerStateType} from "../types";



const PostsReducer = (state : PostsInnerStateType, action: ActionTypeExtended): PostsInnerStateType => {
    switch (action.type) {
        case 'ADD_NEW_INPUT':
            state.inputValue = action.inputValue as string
            return state;
        case 'ADD_NEW_POST':
            state.postsText.push({id: 6, message: state.inputValue})
            state.inputValue = '';
            return state;
        default :
            return state;
    }

}
export default PostsReducer