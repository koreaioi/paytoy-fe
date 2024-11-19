import { useState } from "react";
import { AccountBalance, AccountNumber, BoardWrapper, ButtonWrapper, HeaderWrapper, Input, InputWrapper, Title, Wrapper } from "./style.js";
import { Button } from "../../components/Account/style.js";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { depositAccount } from "../../api/AccountAPI.js";

const DepositPage = () => {
  const params = useParams(); // account_id 추출 시 사용 params.id
  const navigate = useNavigate();
  const location = useLocation();
  const {accountNumber, balance} = location.state || {};
  const [depositBalance, setDepositBalance] = useState("");

  const handleData = (e) => {
    if (e.target.name === "balance") {
      setDepositBalance(e.target.value);
    }
  };

  const onSubmit = async () => {
    try {
      const balaceInfo = {
        accountNumber : accountNumber,
        balance : depositBalance,
      }
      const response = await depositAccount(balaceInfo);
      console.log(response);
      alert("입금되었습니다.");
      navigate('/main');
    } catch (error) {
      console.log("입금 실패했습니다.", error);
    }
  }

  const moveToMain = () => {
    navigate('/main');
  }

  return (
    <Wrapper>
      <HeaderWrapper>
        <Title>PayToy</Title>
      </HeaderWrapper>
      <BoardWrapper>
        <AccountNumber>계좌 번호 : {accountNumber}</AccountNumber>
        <AccountBalance>잔액 : {balance}</AccountBalance>
        <InputWrapper>
          <Input 
            name="balance"
            placeholder="입금금액"
            type="text"
            value={depositBalance}
            onChange={handleData}
          />
        </InputWrapper>
        <ButtonWrapper>
          <Button onClick={onSubmit}>입금하기</Button>
          <Button onClick={moveToMain}>취소하기</Button>
        </ButtonWrapper>
      </BoardWrapper>
    </Wrapper>
  )
}

export default DepositPage;