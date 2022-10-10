import styled from "styled-components";
import { palette } from "../../../styles/palette";

export const NavBarContainer = styled.div`
  width: 100%;
  height: 85px;
  display: flex;
  align-items: center;
  padding: 0px 200px;
  background-color: ${palette.main};
  box-sizing: border-box;
`;

export const NavBarLogo = styled.img`
  width: 140px;
  object-fit: scale-down;
`;

export const NavBarLoginText = styled.span`
  font-size: 20px;
  color: white;
  margin-left: 80px;
  cursor: pointer;
`;

export const NavBarWriteButton = styled.button`
  display: flex;
  align-items: center;
  column-gap: 10px;
  background: none;
  border: 0px;
  margin-left: 50px;
  cursor: pointer;
`;

export const NavBarWriteButtonIcon = styled.div`
  width: 20px;
  height: 20px;
  font-size: 20px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const NavBarWriteButtonText = styled.span`
  font-size: 20px;
  color: white;
`;
