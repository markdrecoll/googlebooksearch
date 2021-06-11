import './App.css';
import React, { useState } from "react";
import Search from "./pages/search";
import Jumbotron from './components/Jumbotron';
import Nav from './components/Nav';
import Saved from './pages/saved';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Jumbotron />
        <Switch>
          <Route exact path={["/", "/search"]}>
          <Search />
          </Route>
          <Route exact path={"/saved"}>
          <Saved />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;