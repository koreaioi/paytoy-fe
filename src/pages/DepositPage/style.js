import styled from "styled-components";


export const Wrapper = styled.div`
  display : flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const HeaderWrapper = styled.div`
  display : flex;
  flex-direction : row;
  position: relative;
  justify-content: center;
`;

export const Title = styled.h1`

font-family: 'Jacques Francois';
font-style: normal;
font-weight: 700;
font-size: 20px;
line-height: 26px;

color: #000000;
`;

export const BoardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  width: 450px;
  height: 350px;
  margin: 20px;

  background: #FFFFFF;
  border: 1px solid rgba(0, 0, 0, 0.25);
`;

export const AccountNumber = styled.p`
  position: absolute;
  width: 100%;
  height: 18px;
  margin-top: 5px;

  font-family: 'Jacques Francois';
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  line-height: 18px;

  color: #000000;
`;

export const AccountBalance = styled.p`
  position: absolute;
  width: 100%;
  height: 18px;
  margin-top: 30px;

  font-family: 'Jacques Francois';
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  line-height: 18px;

  color: #000000;
`;

export const InputWrapper = styled.div`
  margin-top: 80px;
  display : flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  width: 100%;
  height: 50%;
  justify-content: center;
`;

export const Input = styled.input`
  box-sizing: border-box;
  width: 208px;
  height: 35px;
  background: #F5F5F5;
  border: 1px solid rgba(0, 0, 0, 0.25);
`;

export const ButtonWrapper = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: row;
  gap : 30%;
  justify-content: center;
`;