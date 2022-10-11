import styled, { css } from "styled-components";
import { palette } from "../../../../styles/palette";

export const MainProfileTabContainer = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  border-top: 1px solid #c9c9c9;
  margin-bottom: 37px;
`;

export const MainProfileTabItem = styled.div<{ isSelect: boolean }>`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  cursor: pointer;

  ${({ isSelect }) =>
    isSelect
      ? css`
          color: ${palette.main};
          background-color: white;
        `
      : css`
          color: #c9c9c9;
          background-color: #f2f2f2;
        `}
`;
