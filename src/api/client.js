import axios from "axios";

const client = axios.create({
  baseURL: process.env.REACT_APP_SERVER_BASE_URL,
  withCredentials : true,
  headers: {"Content-Type": "application/json"},
});

// request intercepter
client.interceptors.request.use(
  (config) => {
    const sessionId = localStorage.getItem('session_id');
    if(sessionId) {
      config.headers.Session = sessionId;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
)

// response intercepter
client.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if(error.response && error.response.status === 401) {
      alert('로그아웃 되셨습니다.');
      window.location.href = '/'; // 이 방법이 안되면 navigate
      localStorage.removeItem('session_id');
      localStorage.removeItem('user_id');
    }
    return Promise.reject(error);
  }
);

export default client;