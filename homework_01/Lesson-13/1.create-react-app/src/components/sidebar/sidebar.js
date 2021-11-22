import React from 'react'
import './sidebar.css'

export class Sidebar extends React.Component{
    render(){
        return(
            <div>
       <aside className="sidebar color-background">
        <p className="sidebar_fish-type">Морская рыба</p>
        <label >
            <input type="checkbox"/>Акула
        </label>
        <label >
            <input type="checkbox"/>
            Окунь</label>
        <label >
            <input type="checkbox"/>
            Палтус</label>
        <label >
            <input type="checkbox"/>
            Треска</label>
        <p class="fish-type">Пресноводная рыба</p>
        <label>
            <input type="checkbox"/>
            Белоглазка</label>
         <label >
            <input type="checkbox"/>
            Осётр</label>
        <label >
            <input type="checkbox"/>
            Речной угорь</label>
        <label>
            <input type="checkbox"/>
            Камбала</label>
    </aside>
            </div>
        )
    }
}