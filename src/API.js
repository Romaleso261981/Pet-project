import axios from "axios";
axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
const API = axios.create({
  baseURL: "http://185.233.118.244:8080/user",
});

axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
const authToken = {
  // set(token) {
  //   API.defaults.headers.common.Authorization = `Bearer ${token}`;
  // },
  // unset() {
  //   API.defaults.headers.common.Authorization = "";
  // },
};

// reports
const getPeriodTransactions = async (date) => {
  return await API.get(`api/finances/reports?${date} `);
};

API.interceptors.response.use(
  (response) => response,
  async (error) => {
    console.log("interceptors");
    return Promise.reject(error);
  }
);
export { API, authToken, getPeriodTransactions };
