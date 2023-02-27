import axios from "axios";

const API = axios.create({
  baseURL: "http://back.kapusta.click",
});

const authToken = {
  set(token) {
    API.defaults.headers.common.Authorization = `Bearer ${token}`;
  },

  unset() {
    API.defaults.headers.common.Authorization = ``;
  },
};

API.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response.status == 401) {
      const refreshToken = localStorage.getItem("refreshToken");
      try {
        const { data } = await API.post("auth/users/refresh", { refreshToken });
        authToken.set(data.accessToken);
        localStorage.setItem("refreshToken", data.refreshToken);
        return API(error.config);
      } catch (error) {
        return Promise.reject(error);
      }
    }
    return Promise.reject(error);
  }
);
export { API, authToken };
