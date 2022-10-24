import styled from "styled-components";

export const ProfileInfoContainer = styled.div`
  width: 210px;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const ProfileInfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 10px;
`;

export const ProfileInfoImg = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 100%;
  background-color: #f2f2f2;
`;

export const ProfileInfoTextWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ProfileInfoName = styled.h1`
  font-size: 32px;
  line-height: 38px;
  font-weight: 600px;
  color: black;
`;

export const ProfileInfoClass = styled.p`
  font-size: 20px;
  line-height: 24px;
  color: #909090;
`;
