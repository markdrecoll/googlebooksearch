import React, { useEffect, useState} from "react";
import API from "../utils/api.js";

import { BookList, BookListItem } from "../components/BookList";

function Search() {

    const [userBookChoice, setUserBookChoice] = useState("");
    const [books, setBooks] = useState([]);
    const [bookSearch, setBookSearch] = useState("");

    useEffect(() => {

        if(userBookChoice !== ""){
            API.findAllBooks(bookSearch)
                .then(apiItems => setBooks(apiItems.data.items))
                .then(() => {setUserBookChoice("")})
            }
            
    }, [bookSearch])

    const handleInputChange = event => {
        // Destructure the name and value properties off of event.target
        // Update the appropriate state
        const { value } = event.target;
        setUserBookChoice(value);
    };

    const handleFormSubmit = event => {
        setBookSearch(userBookChoice);
    };

    const handleSaveBook = e => {
        console.log(e.target.parentNode.children);

        const tempObject = {
            title: e.target.parentNode.children[0].innerText,
            authors: e.target.parentNode.children[1].innerText,
            description: e.target.parentNode.children[2].innerText,
            image: e.target.parentNode.children[3].currentSrc,
            link: e.target.parentNode.children[4].href,
        }

        API.saveBook(tempObject);
    }

    return (
        <>
        <input
        onChange={handleInputChange}
        value={userBookChoice} />
        <button onClick={handleFormSubmit} className="btn btn-secondary btn-sm m-1">Search</button>

        <BookList>
            {books.map(book => {
                return (
                    <BookListItem
                        key={book.volumeInfo.title}
                        title={book.volumeInfo.title}
                        href={book.volumeInfo.infoLink}
                        description={book.volumeInfo.description}
                        thumbnail={book.volumeInfo.imageLinks.thumbnail}
                        author={book.volumeInfo.authors[0]}
                        handleSaveBook={handleSaveBook}
                    />
                );
            })}
        </BookList>
        </>
    )
}

export default Search;