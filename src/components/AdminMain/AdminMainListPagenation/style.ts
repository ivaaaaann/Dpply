import styled, { css } from "styled-components";
import { palette } from "../../../styles/palette";

export const AdminMainListPagenationContainer = styled.div`
  width: 100%;
  margin-top: auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SideButton = styled.button<{ direction: "left" | "right" }>`
  width: 26px;
  height: 26px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 22px;
  color: ${palette.main};
  background: none;
  border: 0px;
  cursor: pointer;

  ${({ direction }) =>
    direction === "left"
      ? css`
          rotate: -90deg;
          margin-right: 5px;
        `
      : css`
          rotate: 90deg;
          margin-left: 5px;
        `};
`;

export const PageNumberWrap = styled.div`
  display: flex;
  align-items: center;
`;

export const PageNumber = styled.p`
  width: 30px;
  height: 30px;
  font-size: 22px;
  color: black;
  cursor: pointer;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;
