//import {ListResponseType} from "./api/dumMyApiResponses"

export interface Action{
    type:string,
}

export interface PostsAction extends Action {
    PostList?:Array<any>
    loading?: boolean
    error?:any
    
}

export interface UsersAction extends Action {
    UserList?:Array<any>
    loading?:boolean
    error?:any;
}
