import React from "react"
import mainImage from "./img/mainpic.jpg"
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>My React App</h1>
      <h2>Author: Sean Pen</h2>
      <img className="mainpic" src={mainImage}/>
    </div>
  );
}

export default App;
