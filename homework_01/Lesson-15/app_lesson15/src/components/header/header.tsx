import React from "react"
import "./header.css"

export default class Header extends React.Component{
    render(){
        return (
            <div className="header">
                <div className="header_info">
                <p>Информация</p>
                <select>
                    <option></option>
                    <option>Информация 1</option>
                    <option>Информация 2</option>
                </select>
                </div>
                <div className="header_logo">
                    <img src="logo" alt="Главное лого"/>
                </div>
                <div className="header_login">
                   <div className="header_login__load">
                       <img src="" alt="Fire"/>
                       <p>Загрузка</p>
                   </div>
                   <div className="header_login__log">
                       <a href="#">Войти</a>
                   </div>
                </div>
            </div>
        )
    }
}