import styled from "styled-components";

export const Wrapper = styled.div`
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

export const AccountButton = styled.button`
  position : absolute;
  right : 5px;
  margin : 15px;

  width: 77px;
  height: 27px;

  background: rgba(0, 0, 0, 0.2);
  cursor: pointer;
`;