import axios from "axios";

const bookApi = {
    findAllBooks: function(){
        return axios.get("/api/saved");
    }
}

export default bookApi;