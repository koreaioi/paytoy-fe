import { useNavigate } from "react-router-dom";
import { createAccount } from "../../api/AccountAPI.js";
import { AccountButton, Title, Wrapper } from "./style.js"

const MainHeader = () => {
  const navigate = useNavigate();
  const handleCreateAccount = async () => {
    try {
      const userId = localStorage.getItem('user_id');
      const response = await createAccount({userId : userId});
      console.log(response);      
      navigate(0);
    } catch (error) {
      console.log("계좌 생성 에러", error);
    }
  }
  return (
    <Wrapper>
      <Title>PayToy</Title>
      <AccountButton onClick={handleCreateAccount}>계좌 생성</AccountButton>
    </Wrapper>
  )
}

export default MainHeader;