import React from 'react'
import ar from "./mockData.js"
import Popular_block from "./popular-block/popular-block.js"
import './content.css'

export class Content extends React.Component{
    render(){
        console.log(ar)
        return(
     <div className="content">
        <div className="text">
            <h1>Рыбы на любой вкус</h1>
            <p>Мы продаем рыбов, а не только показываем!</p>
        </div>
        <div className="category-block" >
            <div className="category-item color-background">
                <a href="#">Замороженные рыбы</a>
                <p>Мы заморозили рыбов для вас</p>
            </div>
            <div className="category-item color-background">
                <a href="#">Живые рыбы</a>
                <p>На кухню или разведение</p>
            </div>
        </div>
        <div className="popular-block" >
            <h2>Популярные</h2>
            <div className="popular-container">
                 {ar.map((item=>{
                     return <Popular_block name={item.name} src={item.src}/>
                 }))}
            </div>
        </div>
        </div>
        )
    }
}
