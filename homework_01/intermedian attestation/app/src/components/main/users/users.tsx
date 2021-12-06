import React,{useEffect} from "react"
import "./userlist.scss"
import {connect} from "react-redux"
import {bindActionCreators} from "redux"
import *as actions from "./../../../actions/userAction"

function Users({UserList,loading,error,loadUser}:any){
    useEffect(()=>{
     loadUser(1,6);
    },[]);
    return(
        <section className="userList">
         {console.log(`покажи список ${UserList}`)} 
        {UserList.map((elem:any,index:any)=>{
        return(
        <div className="userList_user" key={index}>
          <div className="USERS_container">
               <img className="picture_userS" src={elem.picture}/>
               <div className="name_container"><span>{elem.title} {elem.firstName} {elem.lastName}</span>
               </div>
          </div>  
    </div>) })}
        </section>
    );
};
export default connect(
    (state:any)=>({
        UserList:state.user.UserList,
        loading:state.user.loading,
        error:state.user.error,
    }),
    (dispatch)=>(bindActionCreators(actions,dispatch)),
)(Users)
