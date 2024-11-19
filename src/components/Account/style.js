import styled from "styled-components";


export const Wrapper = styled.div`
  box-sizing: border-box;
  display : flex;
  flex-direction : column;
  position: relative;
  
  width: 100%;
  height: 120px;


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
  display: flex;
  justify-content: center;
  height: 50%;
  align-items: center;

  font-family: 'Jacques Francois';
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  line-height: 18px;
  color: #000000;
`;

export const ButtonWrapper = styled.div`
  height: 40%;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap : 100px;
  margin-bottom: 5px;
`;

export const Button = styled.button`
  width: 100px;
  height: 30px;

  background: rgba(0, 0, 0, 0.2);
  cursor: pointer;
`;