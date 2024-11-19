import { useState } from "react";
import AuthInput from "../../components/AuthInput/AuthInput.js";
import { Title, Wrapper } from "./style.js";
import { Link, useNavigate } from "react-router-dom";
import AuthButton from "../../components/AuthButton/AuthButton.js";
import { userLogin } from "../../api/AuthAPI.js";


const LoginPage = () => {
  const [tel, setTel] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleData = (e) => {
    if (e.target.name === "tel") {
      setTel(e.target.value);
    }
    if (e.target.name === "password") {
      setPassword(e.target.value);
    }
  }

  const handleSubmit = async () => {
    try {
      const response = await userLogin({tel, password});
      console.log("==========");
      console.log(response);
      console.log("==========");
      if (response.status === 201) {
        const sessionId = response.headers['session'];
        const userId = response.data.data.userId;
        if(sessionId){
          localStorage.setItem('session_id', sessionId);
        }
        if(userId) {
          localStorage.setItem('user_id', userId);
        }
        alert("로그인 성공");
        navigate('/main');
      } else {
        alert("로그인 실패");
      }
    } catch (error) {
      alert("로그인 중 오류 발생");
      console.log(error);
    }
  }

  return (
    <Wrapper>
      <Title>PayToy</Title>
      <AuthInput 
        name="tel"
        placeholder="tel"
        type="tel"
        value={tel}
        onChange={handleData} 
        required
      />
      <AuthInput
        name="password"
        placeholder="password"
        type="password"
        value={password}
        onChange={handleData}
        required
      />
      <AuthButton title = "로그인" onClick={handleSubmit}/>
      <Link to={"/signup"}>회원가입</Link>

    </Wrapper>
  )
}

export default LoginPage;