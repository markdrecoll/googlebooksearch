import React, { useEffect, useState} from "react";
import API from "../utils/api.js";

function Saved() {

    const [books, setBooks] = useState([]);

    API.showAllBooks()
            .then(res => setBooks(res.data))
            .catch(err => console.log(err));

    return (
        <>
        {books.length > 0 && (
            books.map(book => (
                <p>
                    {book.title}                    
                </p>
            ))
        )}
        </>
    )
}

export default Saved;