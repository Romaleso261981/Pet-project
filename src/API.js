import axios from "axios";

const API = axios.create({
  baseURL: "https://nodejs-rest-api.up.railway.app/user",
});

API.interceptors.response.use(
  (response) => response,
  async (error) => {
    console.log("interceptors");
    return Promise.reject(error);
  }
);
export { API };
