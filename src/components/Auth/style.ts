import styled from "styled-components";
import { palette } from "../../styles/palette";

export const AuthContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const AuthImg = styled.img`
  width: 351px;
  object-fit: scale-down;
  position: absolute;
  bottom: 0px;
  right: 0px;
`;

export const AuthWrap = styled.div`
  width: 636px;
  height: 410px;
  position: relative;
`;

export const AuthPaper = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;
  border: 1px solid ${palette.main};
  border-radius: 10px;
  z-index: 3;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AuthPaperWrap = styled.div`
  width: 445px;
  display: flex;
  flex-direction: column;
  row-gap: 55px;
`;

export const AuthTitle = styled.h1`
  color: #909090;
  font-size: 40px;
  line-height: 48px;
`;

export const AuthButton = styled.button`
  width: 100%;
  height: 66px;
  border-radius: 5px;
  background-color: #ffbb4c;
  color: white;
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0px;
  cursor: pointer;
`;

export const AuthOverlay = styled.div`
  width: 700px;
  height: 341px;
  border-radius: 10px;
  background-color: ${palette.main};
  position: absolute;
  left: 50%;
  top: 102px;
  transform: translate(-50%, -0%);
  z-index: 1;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;

export const AuthOverlayBottom = styled.div`
  width: 700px;
  height: 38px;
  border-radius: 10px;
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
  background-color: #ffcf81;
  bottom: -33px;
  left: 50%;
  transform: translate(-50%, -0%);
  position: absolute;
  z-index: 2;
`;
