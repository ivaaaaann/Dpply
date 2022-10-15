import styled from "styled-components";

export const WriteFormContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 37px;
`;

export const WriteFormInput = styled.input`
  width: 100%;
  height: 58px;
  border: 1px solid #909090;
  padding: 0px 25px;
  color: black;
  font-size: 20px;
  box-sizing: border-box;
  border-radius: 10px;
  outline: none;

  ::placeholder {
    color: #909090;
  }
`;

export const WriteFormFileWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const WriteFormFileInput = styled.div`
  width: 550px;
  height: 550px;
  border: 1px solid #909090;
  border-radius: 10px;
`;
