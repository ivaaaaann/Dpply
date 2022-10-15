import {
  WriteFormContainer,
  WriteFormFileInput,
  WriteFormFileWrap,
  WriteFormInput,
} from "./style";

const WriteForm = () => {
  return (
    <WriteFormContainer>
      <WriteFormInput placeholder="제목을 입력해주세요." />
      <WriteFormInput placeholder="제목을 입력해주세요." />
      <WriteFormFileWrap>
        <WriteFormFileInput />
      </WriteFormFileWrap>
    </WriteFormContainer>
  );
};

export default WriteForm;
