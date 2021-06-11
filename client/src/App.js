import './App.css';
import React, { useState } from "react";
import Search from "./pages/search";
import Jumbotron from './components/Jumbotron';
import Nav from './components/Nav';
import Saved from './pages/saved';

function App() {
  return (
    <div className="App">
      <Nav />
      <Jumbotron />
      <Saved /><br /><br />
      <Search />
    </div>
  );
}

export default App;