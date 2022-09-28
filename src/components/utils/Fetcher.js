import axios from "axios";

const Fetcher = axios.create({
    baseURL: 'http://localhost:9000/',
});

export default Fetcher
