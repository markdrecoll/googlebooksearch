import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";
import Jumbotron from "./components/Jumbotron";
import Nav from "./components/Nav";
import Input from "./components/Input";
import Button from "./components/Button";
import API from "./utils/API";
import { RecipeList, RecipeListItem } from "./components/RecipeList";
import { Container, Row, Col } from "./components/Grid";

function App() {

  const [books, setBooks] = useState([]);
  const [bookSearch, setBookSearch] = useState([]);

  const handleInputChange = event => {
    // Destructure the name and value properties off of event.target
    // Update the appropriate state
    const { value } = event.target;
    setBookSearch(value);
  };

  const handleFormSubmit = event => {
    // When the form is submitted, prevent its default behavior, get books update the books state
    event.preventDefault();
    API.getRecipes(bookSearch)
      .then(res => setBooks(res.data))
      .catch(err => console.log(err));
  };




  return (
    <div className="App">
      Mark
    </div>
  );
}

export default App;
