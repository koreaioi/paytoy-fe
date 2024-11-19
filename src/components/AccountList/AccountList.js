import { useEffect, useState } from "react";
import Account from "../Account/Account.js";
import { Wrapper } from "./style.js";
import { getUserInformation } from "../../api/AuthAPI.js";


const AccountList = () => {
  const mockData = [
    {
      account_id : 1,
      accountNumber : "100279974808",
      Balance: "4000",
    },
    {
      account_id : 2,
      accountNumber : "100279974807",
      Balance: 9000,
      }
  ]
  const [accountData, setAccountData] = useState([]);
  useEffect(() => {
    const loadAccountData = async () => {
      try {
        const userId = localStorage.getItem('user_id');
        const data = await getUserInformation(userId); // 유저 아이디 삽입
        console.log(data.data.accounts);
        setAccountData(data.data.accounts);
      } catch (error) {
        console.log("계좌 정보를 불러오는데 실패했습니다.", error);
      }
    }
    loadAccountData()
  }, []);

  return (
    <Wrapper>
      {accountData.map((account => <Account key={account.id} {...account} />))}
    </Wrapper>
  )
}

export default AccountList;