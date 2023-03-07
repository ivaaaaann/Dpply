import styled from "styled-components";
import { palette } from "../../../styles/palette";

export const Container = styled.div`
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  cursor: pointer;
`;

export const Icon = styled.div`
  color: ${palette.gray[300]};
  font-size: 28px;
`;

export const ItemWrap = styled.div`
  width: 126px;
  display: flex;
  flex-direction: column;
  position: absolute;
  left: 32px;
  top: 16px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  overflow: hidden;
  border-radius: 5px;
`;

export const Item = styled.div`
  width: 100%;
  height: 45px;
  background-color: white;
  font-size: 24px;
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    filter: brightness(80%);
  }
`;
