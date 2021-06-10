import React, { useEffect, useState} from "react";
import API from "../utils/api.js";
import { BookList, BookListItem } from "../components/BookList";
import { Container, Row, Col } from "../components/Grid";
import Thumbnail from "../components/Thumbnail";
import Jumbotron from "../components/Jumbotron";
import Nav from "../components/Nav";
import Input from "../components/Input";
import Button from "../components/Button";

function Search() {

    useEffect(() => {
        API.findAllBooks()
            .then(books => console.log(books.data.items))
            // .then(apiItems => setBooks(apiItems.data.items))
    }, [])

    const [books, setBooks] = useState([]);
    const [bookSearch, setBookSearch] = useState([]);

    // const handleInputChange = event => {
    //     // Destructure the name and value properties off of event.target
    //     // Update the appropriate state
    //     const { value } = event.target;
    //     setBookSearch(value);
    // };

    // const handleFormSubmit = event => {
    //     // When the form is submitted, prevent its default behavior, get books update the books state
    //     // event.preventDefault();
    //     // API.getRecipes(bookSearch)
    //     //   .then(res => setBooks(res.data))
    //     //   .catch(err => console.log(err));
    // };

    return (
        <BookList>
            {books.map(book => {
                return (
                    <BookListItem
                        key={book.title}
                        title={book.title}
                        href={book.link}
                        description={book.description}
                        thumbnail={book.image}
                        author={book.author}
                    />
                );
            })}
        </BookList>
        
    )
    
}

export default Search;