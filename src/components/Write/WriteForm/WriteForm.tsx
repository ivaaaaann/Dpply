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

const WriteForm = () => {
  const navigate = useNavigate();

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
      <WriteFormInput placeholder="제목을 입력해주세요." />
      <WriteFormInput placeholder="제목을 입력해주세요." />
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
        <WriteFormTextarea placeholder="건의할 내용을 입력해주세요" />
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
