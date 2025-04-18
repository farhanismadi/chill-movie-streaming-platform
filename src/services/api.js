import axios from "axios";

const api = axios.create({
  baseURL: "https://67ff9ae3b72e9cfaf7253307.mockapi.io/api/v1",
});

export default api;
