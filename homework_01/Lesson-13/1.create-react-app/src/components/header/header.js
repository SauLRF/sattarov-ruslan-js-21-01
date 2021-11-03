import React from 'react'
import './header.css'

export class Header extends React.Component {
  render() {
    return (
        <div className="header">
        <h1>Интернет-магазин "Не только красивое"</h1>
        <div id="loader">
            <div id="fountain" className="loader_f1"></div>
            <div id="fountain" className="loader_f2"></div>
            <div id="fountain" className="loader_f3"></div>
        </div>
        </div>
    )
  }
}