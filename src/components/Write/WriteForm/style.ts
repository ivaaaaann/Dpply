import styled from "styled-components";
import { palette } from "../../../styles/palette";

export const WriteFormContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 37px;
  padding-bottom: 53px;

  input[type="file"] {
    display: none;
  }
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
  column-gap: 49px;
`;

export const WriteFormFileInputLabel = styled.label`
  min-width: 550px;
  height: 550px;
  border: 2px dashed #909090;
  border-radius: 10px;
  background-size: 10px 4px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const WriteFormFileInputTextWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const WriteFormFileInputIcon = styled.div`
  width: 97px;
  height: 97px;
  font-size: 97px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #909090;
`;

export const WriteFormFileInputText = styled.p`
  font-size: 24px;
  line-height: 29px;
  color: #909090;
  cursor: pointer;
  text-align: center;

  strong {
    color: ${palette.main};
    text-decoration: underline;
  }
`;

export const WriteFormFileImage = styled.img`
  min-width: 550px;
  max-width: 550px;
  height: 550px;
  border-radius: 10px;
  object-fit: scale-down;
  border: 2px solid #909090;
`;

export const WriteFormTextarea = styled.textarea`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  border: 1px solid #909090;
  outline: none;
  resize: none;
  padding: 25px;
  box-sizing: border-box;
  font-size: 20px;
`;

export const WriteFormSubmitWrap = styled.div`
  display: flex;
  justify-content: end;
  column-gap: 27px;
`;

export const WriteFormBackButton = styled.div`
  width: 180px;
  height: 50px;
  border-radius: 10px;
  background-color: #b5b5b5;
  font-size: 24px;
  font-weight: 700px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  cursor: pointer;
`;

export const WriteFormSubmitButton = styled.div`
  width: 180px;
  height: 50px;
  border-radius: 10px;
  background-color: ${palette.main};
  color: white;
  font-size: 24px;
  font-weight: 700px;
  display: flex;
  align-items: center;
  cursor: pointer;
  justify-content: center;
`;

export const WriteFormCategoryWrap = styled.div`
  width: 100%;
  height: 58px;
  border: 1px solid #909090;
  display: flex;
  align-items: center;
  padding: 0px 25px;
  column-gap: 10px;
  color: #909090;
  border-radius: 10px;
  font-size: 20px;
  cursor: text;
  position: relative;
  box-sizing: border-box;
  cursor: pointer;
`;

export const WriteFormCategoryItemWrap = styled.div`
  width: 100%;
  position: absolute;
  top: 64px;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  overflow: hidden;
  border: 1px solid #909090;
  left: -1px;
`;

export const WriteFormCategoryItem = styled.div`
  width: 100%;
  height: 58px;
  border-bottom: 1px solid #909090;
  background-color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 0px 25px;
  box-sizing: border-box;
  cursor: pointer;

  :last-child {
    border-bottom: 0px;
  }

  :hover {
    filter: brightness(98%);
  }
`;

export const WriteFormCategoryLabel = styled.div`
  height: 30px;
  padding: 0px 10px;
  border-radius: 10px;
  color: white;
  display: flex;
  align-items: center;
  font-size: 18px;
  cursor: pointer;
`;
