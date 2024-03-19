import axios from "axios";

const api = axios.create({
    baseURL: process.env.REACT_APP_API_ENDPOINT_AUTH
});

export default api;