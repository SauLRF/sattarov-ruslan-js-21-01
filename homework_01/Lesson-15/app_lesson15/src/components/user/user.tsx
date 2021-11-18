import React from "react"
import "./user.css"
import {ThemeContextConsumer, ThemeContextState} from "../../contexts/ThemeContext"

interface Props {
    picture?:any;
    firstName?:string;
    lastName?:string;
    title?:string;
  }
  
export default class User extends React.Component<Props>{
    render(){
        return(
            <ThemeContextConsumer>
            {(context:Partial<ThemeContextState>)=>(
                <div className={`user ${context.darkTheme && 'user_dark'}`}>
                <div className="user_img">
                    <img src={this.props.picture} alt="фото пользователя"/>
                </div>
                <p className="user_name">{this.props.title} {this.props.firstName} {this.props.lastName}</p>
            </div>
            )}   
            </ThemeContextConsumer>
            
           
        )
    }
}