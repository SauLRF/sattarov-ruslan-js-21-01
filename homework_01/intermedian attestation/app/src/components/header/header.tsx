import React from "react"
import "./header.scss"

function Header(){
    return (
        <div className="Header">
          <div className="Header-wrapper">
          <picture>
               <source src="#" media=""/>
               <img src="#"/>
               <span>Ruslan APP</span>
          </picture> 
          <div className="Header-sidebar">
              <div className="Header-users">
                <span>Пользователи</span>
                <img src="#"/>
                </div>
              <div className="Header-posrs">
                 <span>Посты</span>
                 <img src="#"/>
              </div>
          </div>
          <div className="Header-auth">
            <div className="Header-auth_Logout">Войти</div>
            <div className="Header-auth_Registation">Регистрация</div>
          </div>
          </div>
          
        </div>
    )
}
export default Header