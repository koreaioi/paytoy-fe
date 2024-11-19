import axios from "axios";

// axios 설정
const client = axios.create({
  baseURL: process.env.REACT_APP_SERVER_BASE_URL, // 요청 BASEURL은 환경변수 주입
  withCredentials : true,
  headers: {"Content-Type": "application/json"},
});

// request intercepter
client.interceptors.request.use(
  (config) => {
    const sessionId = localStorage.getItem('session_id');
    if(sessionId) {
      // 로그인 이후 요청을 보낼 때 sessionId를 헤더에 넣어줘야한다.
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
  (error) => { // 요청의 응답이 error 인 경우 (만약 401이면 session 에러로 다시 로그인)
    if(error.response && error.response.status === 401) {
      alert('로그아웃 되셨습니다.');
      window.location.href = '/'; // '/'로 리다이렉트
      localStorage.removeItem('session_id');
      localStorage.removeItem('user_id');
    }
    return Promise.reject(error);
  }
);

export default client;