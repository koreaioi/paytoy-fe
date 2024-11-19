import AccountList from "../../components/AccountList/AccountList.js";
import MainHeader from "../../components/MainHeader/MainHeader.js";
import { Wrapper } from "./style.js";

const MainPage = () => {
  return (
    <Wrapper>
      <MainHeader />
      <AccountList />
    </Wrapper>
  )
}

export default MainPage;