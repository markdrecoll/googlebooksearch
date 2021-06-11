import React, { useEffect, useState} from "react";
import API from "../utils/api.js";

function Saved() {

    const [books, setBooks] = useState([]);

    API.showAllBooks()
            .then(res => console.log("TEST", res.data))
            // .then(res => setBooks(res.data))
            
          .catch(err => console.log(err));

        //   useEffect(() => {

        //   API.showAllBooks()
        //   .then(res => setBooks(res.data))
        //   .catch(err => console.log(err));
                
        // }, [books])

    return (
        <>
        {books.map(book => (
            {book}
        ))}
        </>
    )
}

export default Saved;