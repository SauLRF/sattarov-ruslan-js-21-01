import React from "react"
import "./footer.scss"

function Footer(){
    return (
        <div className="footer">
            <div className="footer-wrapper">
                <span>Delta Insta World</span>
                <div className="footer-theme">
                    <span>Темная тема</span>
                    <label className="switch">
                         <input type="checkbox"/>
                         <span className="slider round"></span>
                        </label>
                </div>
            </div>
        </div>
    )
}
export default Footer