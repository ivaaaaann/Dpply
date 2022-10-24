import styled, { css } from "styled-components";

export const ProfileTagListContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 78px;
`;

export const ProfileTagListTitle = styled.div`
  width: 100%;
  height: 60px;
  border-bottom: 1px solid #c9c9c9;
  padding: 14px 10px;
  font-size: 24px;
  font-weight: 600px;
  box-sizing: border-box;
  line-height: 29px;
  display: flex;
  align-items: center;
`;

export const ProfileTagListWrap = styled.div`
  width: 100%;
  padding: 20px 10px;
  box-sizing: border-box;
  row-gap: 4px;
  display: flex;
  flex-direction: column;
`;

export const ProfileTagListText = styled.p<{ isSelect: boolean }>`
  font-size: 20px;
  display: flex;
  align-items: center;
  column-gap: 7px;
  cursor: pointer;
  transition: all 0.3s ease;

  ${({ isSelect }) =>
    isSelect
      ? css`
          color: black;
          font-weight: bold;
          margin: 10px 0px;
        `
      : css`
          color: #909090;
        `}
`;

export const ProfileTagLisTextNumber = styled.span`
  color: #909090;
  font-weight: 400;
`;
