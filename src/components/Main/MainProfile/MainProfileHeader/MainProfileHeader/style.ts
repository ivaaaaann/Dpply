import styled from "styled-components";

export const MainProfileHeaderContainer = styled.div`
  width: 100%;
  height: 85;
  padding: 33px 36px;
  padding-top: 0px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  column-gap: 26px;
`;

export const MainProfileHeaderImg = styled.img`
  min-width: 85px;
  height: 85px;
  border-radius: 100%;
  object-fit: scale-down;
  background-color: #d9d9d9;
`;

export const MainProfileHeaderInfoWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  row-gap: 8px;
`;

export const MainProfileHeaderName = styled.h1`
  font-size: 24px;
  line-height: 29px;
  color: black;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

export const MainProfileHeaderClass = styled.p`
  font-size: 16px;
  color: black;
  line-height: 19px;
`;

export const MainProfileHeaderNotLogin = styled.p`
  width: 100%;
  font-size: 24px;
  font-weight: 600;
  color: #8a8a8a;
`;
