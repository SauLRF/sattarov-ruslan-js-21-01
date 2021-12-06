import React from 'react';
import Header from "./components/header/header"
import Footer from "./components/footer/footer"
import Main from "./components/main/main"
import Navigation from './components/navigation/navigation';
import './App.scss';

function App() {
  return (
   <div className="wrapper">
     <div className="app-container">
       <Navigation/>     
       <Header/>
       <Main/>
       <Footer/>
     </div>
   </div>
  
  );
}

export default App;
