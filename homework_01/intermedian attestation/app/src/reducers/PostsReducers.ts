import produce from "immer";
import { PostsAction } from "../types/action";
import { PostsState } from "../types/state";
import { PostType } from "../types/api/dumMyApiResponses";
import { LOAD_POSTS, LOAD_POSTS_SUCCESS } from "../constants/actions/posts";
import { LOAD_POSTS_ERROR } from './../constants/actions/posts';


const initialState:PostsState={
    PostList:[],
    loading: false,
    error:"",
}
const hideLoad=(draft:PostsState)=>{
    draft.loading=false;
    return draft;
}
const load = (draft:PostsState)=>{
    draft.loading=true;
    return draft;
}
const loadSuccess = (draft:PostsState,resp?:Array<PostType>)=>{
    draft.PostList=resp || [];
    draft.loading=false;
    return draft;
}
const loadError=(draft:PostsState,e?:any)=>{
    draft.loading=false;
    draft.error=e;
    return draft;
    
}

const Posts=(state=initialState,action:PostsAction)=>(
    produce(state,(draft:PostsState)=>{
            switch(action.type) {
                case LOAD_POSTS: return load(draft);
                case "POSTS/POSTS_LOAD_HIDE": return hideLoad(draft);
                case LOAD_POSTS_SUCCESS: return loadSuccess(draft,action.PostList);
                case LOAD_POSTS_ERROR:return loadError(draft,action.error)
                default:return state;
            }
        })
)
export default Posts