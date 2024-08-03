import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:3003",
  // baseURL: "https://restaurant-app-api.aryajati.my.id"
});

export default instance;
