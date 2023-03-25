import React, {Component} from "react";
import './App.css'
import Navbar from './components/Navbar'
import User from "./components/User";

function App() {
  return (
    <div className="container">
      <Navbar title="User App"/>
      <hr/>
      <User
      name="Emrah TÜRK"
      salary="20.000"
      department="Yazılım"
       />
      <User
      name="İpek TÜRK"
      salary="10.000"
      department="Bilişim"
       />
  
    </div>

    
  );
}

export default App;
