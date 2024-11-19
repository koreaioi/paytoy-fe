import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import LoginPage from './pages/LoginPage/LoginPage.js';
import SignupPage from './pages/SingupPage/SignupPage.js';
import MainPage from './pages/MainPage/MainPage.js';
import DepositPage from './pages/DepositPage/DepositPage.js';
import RemittancePage from './pages/RemittancePage/RemittancePage.js';
import WithdrawalPage from './pages/WithdrawalPage/WithdrawalPage.js';



function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path ='/' element={<LoginPage />} />
          <Route path ='/signup' element={<SignupPage />} />
          <Route path ='/main' element={<MainPage />} />
          <Route path ='/deposit/:id' element={<DepositPage />} />
          <Route path ='/remittance/:id' element={<RemittancePage />} />
          <Route path ='/withdrawal/:id' element={<WithdrawalPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
