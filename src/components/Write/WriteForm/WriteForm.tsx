import {
  WriteFormBackButton,
  WriteFormCategoryItem,
  WriteFormCategoryLabel,
  WriteFormCategoryItemWrap,
  WriteFormCategoryWrap,
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
import { useState } from "react";
import { WRITE_TAG_ITEMS } from "../../../constants/write/write.constant";
import { SuggestionTag } from "../../../types/suggestion/suggestion.type";

const WriteForm = () => {
  const navigate = useNavigate();

  const [categoryIsClick, setCategoryIsClick] = useState(false);

  const { postData, onChangeTextValue, onChangeCategory, onRemoveCategory } =
    usePostSuggestion();

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
      <WriteFormCategoryWrap
        onClick={(e) => {
          e.stopPropagation();
          setCategoryIsClick((prev) => !prev);
        }}
      >
        {postData.tag.length === 0
          ? "카테고리를 선택해주세요."
          : postData.tag.map((item) => {
              const handleCategory = WRITE_TAG_ITEMS.find(
                (category) => category.type === item
              );

              return (
                <WriteFormCategoryLabel
                  style={{ backgroundColor: handleCategory?.color }}
                  onClick={() =>
                    onRemoveCategory(handleCategory?.type as SuggestionTag)
                  }
                >
                  {handleCategory?.title}
                </WriteFormCategoryLabel>
              );
            })}
        {categoryIsClick && (
          <WriteFormCategoryItemWrap>
            {WRITE_TAG_ITEMS.map((item) => (
              <WriteFormCategoryItem
                onClick={() => onChangeCategory(item.type as SuggestionTag)}
              >
                <WriteFormCategoryLabel style={{ backgroundColor: item.color }}>
                  {item.title}
                </WriteFormCategoryLabel>
              </WriteFormCategoryItem>
            ))}
          </WriteFormCategoryItemWrap>
        )}
      </WriteFormCategoryWrap>
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
