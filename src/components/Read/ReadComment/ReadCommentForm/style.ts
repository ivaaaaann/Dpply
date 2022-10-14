import styled from "styled-components";
import { palette } from "../../../../styles/palette";

export const ReadCommentFormContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  column-gap: 20px;
`;

export const ReadCommentFormProfileImg = styled.img`
  min-width: 80px;
  height: 80px;
  border-radius: 100%;
  background-color: #f2f2f2;
`;

export const ReadCommentFormInputWrap = styled.div`
  width: 100%;
  height: 80px;
  border: 1px solid #c9c9c9;
  border-radius: 100px;
  background-color: white;
  padding: 0px 40px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;

export const ReadCommentFormInput = styled.input`
  width: 100%;
  height: 100%;
  border: 0px;
  background: none;
  display: flex;
  align-items: center;
  font-size: 24px;
  color: black;
  outline: none;

  ::-webkit-input-placeholder {
    color: #909090;
  }
`;

export const ReadCommentFormInputButton = styled.button`
  width: 40px;
  height: 40px;
  font-size: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${palette.main};
  background: none;
  border: 0px;
  padding: 0px;
  cursor: pointer;
`;
