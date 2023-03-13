import { BlobOptions } from "buffer";
import styled from "styled-components";

export const AdminDropDownContainer = styled.div`
  width: 120px;
  height: 40px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0px 5px;
  position: relative;

  border: 1px solid black;
  background: #ffffff;
  border-radius: 10px;
  box-sizing: border-box;
  font-size: 15px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  cursor: pointer;
`;

export const AdminIconBox = styled.div<{ fold: boolean }>`
  width: 10px;
  height: 10px;
  font-size: 12px;

  color: gray;
  transition: all 0.3s ease;
  transform: rotate(${({ fold }) => (fold ? "180deg" : "0deg")});
`;

export const AdminDropDownWrap = styled.div`
  width: 100px;
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 50px;
  left: -1px;
  border: 1px solid ${({ theme }) => theme.borderColor};
  box-sizing: border-box;
  background-color: #ffffff;
  border-radius: 5px;
  overflow: hidden;
`;

export const AdiminTagItem = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  align-items: center;
  padding: 0px 5px;
  box-sizing: border-box;

  &:hover {
    background-color: rgba(0, 0, 0, 0.06);
  }
`;
