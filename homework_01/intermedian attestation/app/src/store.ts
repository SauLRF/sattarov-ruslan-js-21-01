import {applyMiddleware,combineReducers,createStore } from "redux";
import Posts from "./reducers/PostsReducers";
import thunk from "redux-thunk";
import Users from "./reducers/UsersReducers"

const middleware=(store:any)=>(next:any)=>(action:any)=>{
 console.group(`${action.type} log`);
  console.log(action);
  console.log(store);
  console.groupEnd();
  next(action);
}
const store = createStore(
    combineReducers({
        user:Users,
        post:Posts,
        
    }),
    applyMiddleware(thunk)
    );

export default store;