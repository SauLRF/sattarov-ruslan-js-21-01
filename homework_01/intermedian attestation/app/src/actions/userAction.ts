import { Dispatch } from "redux"
import { getUsersList } from '../api/dumMyApi';
import { LOAD_USERS,LOAD_USERS_SUCCESS,LOAD_USERS_ERROR } from "../constants/actions/users"

 const loadAction = () =>({
    type:LOAD_USERS,
    
})
 const loadSuccessAction = (users:any)=>({
    type:LOAD_USERS_SUCCESS,
    UserList:users,
})

const loadErrorAction = (error:string)=>({
    type:LOAD_USERS_ERROR,
    error,
})

export const loadUser = (pageNum:number,pageSize:number)=>(dispatch:Dispatch)=>{
    dispatch(loadAction());
    getUsersList(pageNum,pageSize)
    .then((resp)=>dispatch(loadSuccessAction(resp)))
    .catch((error)=>dispatch(loadErrorAction(error)))
    .finally(()=>dispatch({type:"USERS/USERS_LOAD_HIDE"}))
}
    
