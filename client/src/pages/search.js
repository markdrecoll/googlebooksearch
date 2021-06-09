import React, { useEffect } from "react";
import API from "../utils/api.js";

function Search(){
    useEffect(() => {
        API.findAllBooks()
            .then(books => console.log(books))
    }, [])
    return (
        <div>
            search
        </div>
    )
}

export default Search;