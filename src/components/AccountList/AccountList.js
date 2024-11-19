import { useEffect, useState } from "react";
import Account from "../Account/Account.js";
import { Wrapper } from "./style.js";
import { getUserInformation } from "../../api/AuthAPI.js";


const AccountList = () => {
  // const mockData = [
  //   {
  //     account_id : 1,
  //     accountNumber : "100279974808",
  //     Balance: "4000",
  //   },
  //   {
  //     account_id : 2,
  //     accountNumber : "100279974807",
  //     Balance: 9000,
  //     }
  // ]
  const [accountData, setAccountData] = useState([]);
  useEffect(() => {
    const loadAccountData = async () => {
      try {
        // user_id는 로그인하면 백엔드에서 응답해주고 이를 localStorage에 저장
        const userId = localStorage.getItem('user_id');//localStorage에서 userId를 가져다 쓴다.
        const data = await getUserInformation(userId); // userId로 유저 정보를 조회 -> 반환 데이터는 data에 저장
        console.log(data.data.accounts);
        setAccountData(data.data.accounts);
      } catch (error) {
        console.log("계좌 정보를 불러오는데 실패했습니다.", error);
      }
    }
    loadAccountData()
  }, []);
  // 각 계좌 객체에 대해 map() 함수를 사용하여 Account 컴포넌트를 렌더링
  return (
    <Wrapper>
      {accountData.map((account => <Account key={account.id} {...account} />))}
    </Wrapper>
  )
}

export default AccountList;