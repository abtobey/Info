import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar"
import Portfolio from "./components/Portfolio"
import Profile from "./components/Profile"
import Contact from "./components/Contact"

function App() {

  return (
    <Router basename="/info">
    <div className="App">
      <Navbar/>

      <Route exact path = "/" component={Profile}/>
      <Route exact path ="/portfolio" component={Portfolio}/>
      <Route exact path ="/contact" component={Contact}/>

    </div>
    </Router>
  );
}

export default App;
