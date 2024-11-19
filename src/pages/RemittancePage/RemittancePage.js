import { useState } from "react";
import { AccountBalance, AccountNumber, BoardWrapper, ButtonWrapper, HeaderWrapper, Input, InputWrapper, Title, Wrapper } from "./style.js";
import { Button } from "../../components/Account/style.js";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { remittanceAccount } from "../../api/AccountAPI.js";

const RemittancePage = () => {
  const params = useParams(); // account_id 추출 시 사용 params.id
  const navigate = useNavigate();
  const location = useLocation();
  const {accountNumber, balance} = location.state || {};
  const [remittanceBalance, setBalance] = useState("");
  const [account, setAccount] = useState("");

  const handleData = (e) => {
    if (e.target.name ==="account") {
      setAccount(e.target.value);
    }
    if (e.target.name === "balance") {
      setBalance(e.target.value);
    }
  };

  const onSubmit = async () => {
    try {
      const remitData = {
        sendAccountNumber: accountNumber,
        balance: remittanceBalance,
        receiveAccountNumber: account,
      }
      const response = await remittanceAccount(remitData);
      console.log(response);
      alert("송금되었습니다.");
      navigate('/main');      
    } catch(error) {
      console.log("송금 실패", error);
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
            name="account"
            placeholder="계좌번호"
            type="text"
            value={account}
            onChange={handleData}
          />
          <Input 
            name="balance"
            placeholder="입금금액"
            type="text"
            value={remittanceBalance}
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

export default RemittancePage;