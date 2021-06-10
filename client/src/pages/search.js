import React, { useEffect } from "react";
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
    }, [])

    

    return (
        // <BookList>
        //     {books.map(book => {
        //         return (
        //             <BookListItem
        //                 key={book.title}
        //                 title={book.title}
        //                 href={book.link}
        //                 description={book.description}
        //                 thumbnail={book.image}
        //                 author={book.author}
        //             />
        //         );
        //     })}
        // </BookList>
        <></>
    )
    
}

export default Search;