import React from "react"
import './App.css';
import {Header} from "./components/header/header.js"
import {Sidebar} from "./components/sidebar/sidebar.js"
import {Content} from "./components/content/content.js"
import {Footer} from "./components/footer/footer.js"
class App extends React.Component {
  render(){
  return (
       <div className="App">
         <Header/>
         <div className="main-block">
           <Sidebar/>
           <Content/>
        </div>
       <Footer/>
      </div>    
  );
}}

export default App;
