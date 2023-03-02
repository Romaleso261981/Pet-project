import axios from 'axios';

const API = axios.create({
  baseURL: 'https://back.kapusta.click',
});

const authToken = {
  set(token) {
    API.defaults.headers.common.Authorization = `Bearer ${token}`;
  },

  unset() {
    API.defaults.headers.common.Authorization = '';
  },
};

// reports*****************************
const getPeriodTransactions = async date => {
  return await API.get(`api/finances/reports?${date}`);
};




API.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response.status == 401) {
      const refreshToken = localStorage.getItem('refreshToken');
      console.log(refreshToken);
      try {
        const { data } = await API.post('/auth/users/resend', { refreshToken });
        console.log(data);
        authToken.set(data.accessToken);
        localStorage.setItem('refreshToken', data.refreshToken);
        return API(error.config);
      } catch (error) {
        return Promise.reject(error);
      }
    }
    return Promise.reject(error);
  },
);
export { API, authToken, getPeriodTransactions };
