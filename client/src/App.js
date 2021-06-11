import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";
import Search from "./pages/search";
import Jumbotron from './components/Jumbotron';
import Nav from './components/Nav';

function App() {
  return (
    <div className="App">
      <Nav />
      <Jumbotron />
      <Search />
    </div>
  );
}

export default App;
