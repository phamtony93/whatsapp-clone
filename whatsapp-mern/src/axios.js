import axios from "axios";

// create a custom instance of axios with a base url
const instance = axios.create({
  baseURL: "http://localhost:9000",
});

export default instance;
