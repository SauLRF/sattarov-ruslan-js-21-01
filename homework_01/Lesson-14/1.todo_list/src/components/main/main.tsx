import React from "react"
import './main.css';
import  {InworkResponse} from "../../Data/mockdata";


export default class Main extends React.Component{
    handleList=(e:any)=>{
        this.setState({text:e.currentTarget.value})
    }
    handleAdd=()=>{
        const data={
            text: this.state.text,
            finished:false,
            id: Math.random()*100,
        };
        if(this.state.text.trim()!=="") { this.setState({
            todo:[data,...this.state.todo],
            text:"",
        },()=>{
        const dataJSON=JSON.stringify(this.state.todo);
        localStorage.setItem("task",dataJSON);
        })}
       
    }
    handleRemove=(id:any)=>{
        this.setState({
            todo:this.state.todo.filter((item:any)=>item.id!==id),
        },()=>localStorage.setItem("task",JSON.stringify(this.state.todo)))  
    }

    state={
     todo:localStorage.getItem("task")?JSON.parse(localStorage.getItem("task") as string):[],
     text:"",
    }
   
    render(){
        const {todo}=this.state
       
    return(
        <div className="main">
            <section className="main_blockInput">
              <form>
                  <label >
                     <p>Введите вашу задачу</p>                    
                     <input  onChange={this.handleList} type="text" value={this.state.text}/>
                </label>
                <button onClick={this.handleAdd} className="button-plus" type="button">+</button>
              </form>
              <div className="main-todo">
                  <ul className="main-todo_inwork">В работе :
                      {todo.map((item:any,index:number)=>(
                          <div><li key={item.id}><a onClick={this.handleRemove.bind(this,item.id)} href="#">{item.text}</a></li></div>))}
                  </ul>
              </div>
            </section>
        </div>
    )
}
}