import produce from "immer";
import { UsersAction } from "../types/action";
import { UsersState } from "../types/state";
import { UserType } from "../types/api/dumMyApiResponses";
import { LOAD_USERS, LOAD_USERS_SUCCESS } from "../constants/actions/users";
import { LOAD_USERS_ERROR } from './../constants/actions/users';


const initialState:UsersState={
    UserList:[],
    loading: false,
    error:"",
}
const hideLoad=(draft:UsersState)=>{
    draft.loading=false;
    return draft;
}
function load(draft: UsersState) {
    draft.loading = true;
    return draft;
}
const loadSuccess = (draft:UsersState,resp?:Array<UserType>)=>{
    draft.UserList=resp || [];
    draft.loading=false;
    return draft;
}
const loadError=(draft:UsersState,e?:any)=>{
    draft.loading=false;
    draft.error=e;
    return draft;
    
}

const Users=(state=initialState,action:UsersAction)=>(
    produce(state,(draft:UsersState)=>{
            switch(action.type) {
                case LOAD_USERS: return load(draft);
                case "POSTS/POSTS_LOAD_HIDE": return hideLoad(draft);
                case LOAD_USERS_SUCCESS: return loadSuccess(draft,action.UserList);
                case LOAD_USERS_ERROR:return loadError(draft,action.error)
                default:return state;
            }
        })
)
export default Users