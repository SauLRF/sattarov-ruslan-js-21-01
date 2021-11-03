import React from "react"

 function Popular_block(props){
    return(
        <div className="popular-item color-background">
                    <img className="picture" alt="img"/>
                    <a href={props.src||"#"} >{props.name}</a>
                    <button>Купить</button>
          </div>
    )
}
export default Popular_block;