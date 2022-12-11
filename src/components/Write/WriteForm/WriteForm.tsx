import {
  WriteFormBackButton,
  WriteFormContainer,
  WriteFormFileInputIcon,
  WriteFormFileInputLabel,
  WriteFormFileInputTextWrap,
  WriteFormFileWrap,
  WriteFormInput,
  WriteFormSubmitButton,
  WriteFormSubmitWrap,
  WriteFormText,
  WriteFormTextarea,
} from "./style";
import { BsCloudUpload } from "@react-icons/all-files/bs/BsCloudUpload";
import { useNavigate } from "react-router-dom";
import useUploadSuggestionImage from "../../../hooks/suggestion/useUploadSuggestionImage";
import usePostSuggestion from "../../../hooks/suggestion/usePostSuggestion";

const WriteForm = () => {
  const navigate = useNavigate();

  const { postData, onChangeTextValue } = usePostSuggestion();

  const {
    dragHandler,
    dragInHandler,
    dragOutHandler,
    onChangeImage,
    dropHandler,
    isDrag,
  } = useUploadSuggestionImage();

  return (
    <WriteFormContainer>
      <WriteFormInput
        placeholder="제목을 입력해주세요."
        value={postData.title}
        name="title"
        onChange={onChangeTextValue}
      />
      <WriteFormInput placeholder="카테고리를 입력해주세요." />
      <WriteFormFileWrap>
        <input id="WriteFormFileInput" type="file" onChange={onChangeImage} />
        <WriteFormFileInputLabel
          draggable={true}
          htmlFor="WriteFormFileInput"
          onDrop={dropHandler}
          onDragOver={dragHandler}
          onDragLeave={dragOutHandler}
          onDragEnter={dragInHandler}
        >
          <WriteFormFileInputTextWrap>
            <WriteFormFileInputIcon>
              <BsCloudUpload />
            </WriteFormFileInputIcon>
            <WriteFormText>
              드래그 앤 드롭
              <br /> 또는
              <strong>업로드</strong>
            </WriteFormText>
          </WriteFormFileInputTextWrap>
        </WriteFormFileInputLabel>
        <WriteFormTextarea
          placeholder="건의할 내용을 입력해주세요"
          onChange={onChangeTextValue}
          value={postData.text}
          name="text"
        />
      </WriteFormFileWrap>
      <WriteFormSubmitWrap>
        <WriteFormBackButton onClick={() => navigate(-1)}>
          돌아가기
        </WriteFormBackButton>
        <WriteFormSubmitButton>확인</WriteFormSubmitButton>
      </WriteFormSubmitWrap>
    </WriteFormContainer>
  );
};

export default WriteForm;
