import React from "react"
import "./main.css"
import {CommentType} from "../../types/dumMyApiResponses"
import {getUsersList} from "../../../src/api/dumMyapi"
import User from "../user/user"
import {ThemeContextConsumer, ThemeContextState} from "../../contexts/ThemeContext"
import withHelper from "../../wrapper/withHelper"


interface State {
    comments: Array<CommentType>;
    pages?:any;
    pageClick?:any,
    limitUsers?:any,
  }
const initialState:State = {
    comments:[],
    pages:[1,2,3,4,5],
    pageClick:0,
    limitUsers:10,
}
const UsersWithHelper=withHelper(User)

export default class Main extends React.Component<{},State>{
    constructor(props: {}) {
        super(props);
        this.state = initialState;

      }
    handlePages=(value:number):void=> {
        this.setState({
          pageClick:value
        })
    }
    onChangeUsers=(e:any)=>{
      this.setState({
        limitUsers:e.currentTarget.value,
      })
    }
  
    componentDidMount(): void {
        this.loadUsers(0, 10);
        console.log(`вызывается didmount ${this.state.pageClick}`)
      }
    loadUsers(page: number, limit: number) {
        getUsersList(page, limit, (resp: Array<CommentType>) => this.setState({ comments: resp }));
      }
      componentDidUpdate(Props:any,prevState:any):void{
        if(prevState.pageClick!==this.state.pageClick || prevState.limitUsers!==this.state.limitUsers ){
           this.loadUsers(this.state.pageClick,this.state.limitUsers)}
           console.log(`${Props} ${prevState.pageClick} ${prevState.limitUsers}`)
          
    }
    render():React.ReactNode{
        return(
        <ThemeContextConsumer>
            {(context:Partial<ThemeContextState>)=>(
                <div className={`main ${context.darkTheme && 'main_dark'}`}>
               <p className="main_title">Пользователи</p>
                <div className="user_amount">
                  <span className={`user_amount_text ${context.darkTheme && 'user_amount_text_dark'}`} >Кол-во пользователей</span>
                  <select onChange={this.onChangeUsers}>
                    <option value="5">5</option>
                    <option selected value="10">10</option>
                    <option value="15">15</option>
                  </select>
                </div>
               <section className="main_users">
               
                   {this.state.comments.length!==0?this.state.comments.map((item:CommentType,index:number)=>(
                         <UsersWithHelper 
                         id={item.id}
                         key={index}
                         picture={item.picture}
                         firstName={item.firstName}
                         lastName={item.lastName}
                         title={item.title}/>
                   )):"при загрузке случилось нечто"}
                </section>
               <div className="main_pagination">
                  
                   <div className={`main_pagination__pag ${context.darkTheme && 'main_pagination__pag__dark'}`}>
                        {this.state.pages.map((i:number,index:number)=>(
                          <a onClick={this.handlePages.bind(this,index)}>{i}</a>
                        ))}
                       </div>
                   <ThemeContextConsumer>
                   {(context:Partial<ThemeContextState>)=>(
                    <div className="main_pagination__theme">
                       <span>Темная тема</span>
                       <input 
                         type="checkbox"
                         checked={context.darkTheme}
                         onClick={context.toggleTheme}/>
                   </div>
                   )}
                   </ThemeContextConsumer>
                   
               </div>
           </div>
            )}
           
           </ThemeContextConsumer>
        )}
    }
