import { Dispatch } from "redux"
import { getPostsList } from '../api/dumMyApi';
import { LOAD_POSTS,LOAD_POSTS_SUCCESS,LOAD_POSTS_ERROR } from "../constants/actions/posts"

 const loadAction = () =>({
    type:LOAD_POSTS,
})
 const loadSuccessAction = (posts:any)=>({
    type:LOAD_POSTS_SUCCESS,
    PostList:posts,
})
const loadErrorAction = (error:string)=>({
    type:LOAD_POSTS_ERROR,
    error,
})
export const load = (pageNum:number,pageSize:number)=>(dispatch:any)=>{
    dispatch(loadAction());
    getPostsList(pageNum,pageSize)
    .then((resp)=>dispatch(loadSuccessAction(resp)))
    .catch((error)=>dispatch(loadErrorAction(error)))
    .finally(()=>dispatch({type:"POSTS/POSTS_LOAD_HIDE"}))
}
    

