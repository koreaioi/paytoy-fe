import { useNavigate } from "react-router-dom";
import { AccountNumber, AccountBalance, Button, ButtonWrapper, Wrapper } from "./style.js"

const Account = ({id, accountNumber, balance}) => {
  
  const navigate = useNavigate();

  const formatBalance = (balance) => {
    console.log(balance);
    return Number(balance).toLocaleString();
  }
  const handleRemittance = () => {
    navigate(`/remittance/${id}`, {state : {accountNumber, balance}});
  }

  const handleDeposit = () => {
    navigate(`/deposit/${id}`, {state : {accountNumber, balance}});
  }

  const handleWithdrawal = () => {
    navigate(`/withdrawal/${id}`, {state: {accountNumber, balance}});
  }

  return (
    <Wrapper>
      <AccountNumber>계좌번호 : {accountNumber}</AccountNumber>
      <AccountBalance>{formatBalance(balance)} 원</AccountBalance>
      <ButtonWrapper>
        <Button onClick={handleDeposit}>입금하기</Button>
        <Button onClick={handleRemittance}>송금하기</Button>
        <Button onClick={handleWithdrawal}>출금하기</Button>
      </ButtonWrapper>
    </Wrapper>
  )
}

export default Account;