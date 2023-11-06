import axios from "axios";

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    params:{
        api_key: "4f6d5a4668662f9394422425fce634fc",
        language: "ko-KR"
    }
});

export default instance;