import axios from "axios";

class ApiConfige {

    protected readonly BaseURL : string = 'https://api.themoviedb.org/3';
    protected readonly ApiKey : string = 'f36f23edf6e10fd2ddcf939916b1f67a';

     getApi(){
        return axios.create({
            baseURL : this.BaseURL,
            params : {
                api_key : this.ApiKey
            }
        })
    }
}

export { ApiConfige };


