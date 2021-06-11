import axios from "axios";



const bookApi = {
    findAllBooks: function(query){
        return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}&key=AIzaSyA_1EYC4DcN_9w4ao_YBfTGLszfSU-hRrk`);
    },

    saveBook: function(bookdata){
        return axios.post('/api/saved', bookdata);
    },
    showAllBooks: function(){
        return axios.get("/api/saved");
    }
}



export default bookApi;