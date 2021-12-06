import React,{useEffect} from "react"
import "./postlist.scss"
import {connect} from "react-redux"
import {bindActionCreators} from "redux"
import *as actions from './../../../actions/ListActions';

function Posts({PostList,loading,error,load}:any){
    useEffect(()=>{
        load(0,6)
        console.log(`ПОСТЫ ${PostList}`)
    },[]);
    return(
        <section className="postList">
             {console.log(`покажи список ${PostList}`)} 
    {error?<div>{error}</div>:loading?`Загрузка`:PostList.map((elem:any,index:any)=>{
        console.log(elem)
        return(
        <div className="postList_post" key={index}>
          <div className="user_container">
               <img className="picture_user" src={elem.owner.picture}/>
               <div className="name_container"><span>{elem.owner.title} {elem.owner.firstName} {elem.owner.lastName}</span>
               <small>{elem.publishDate}</small></div>
          </div>  
          <img className="picture_post" src={elem.image}/>
          <span>{elem.text}</span>
    </div>) })}
        </section>
    );
};
export default connect(
    (state:any)=>({
        PostList:state.post.PostList,
        loading:state.post.loading,
        error:state.post.error,
    }),
    (dispatch)=>(bindActionCreators(actions,dispatch)),
)(Posts)
