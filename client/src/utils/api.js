import axios from "axios";

let searchTerm = "fire"

const bookApi = {
    findAllBooks: function(query){
        return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}&key=AIzaSyA_1EYC4DcN_9w4ao_YBfTGLszfSU-hRrk`);
    }
}

// // this function would return all books saved in the database
// const bookApi = {
//     findAllBooks: function(){
//         return axios.get("/api/saved");
//     }
// }


export default bookApi;