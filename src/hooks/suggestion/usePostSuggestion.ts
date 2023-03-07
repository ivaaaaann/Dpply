import { ChangeEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { usePostSuggestionMutation } from "../../quries/suggestion/suggestion.query";
import { suggestionPostImageAtom } from "../../store/suggestion/suggestion.store";
import {
  Suggestion,
  SuggestionTag,
} from "../../types/suggestion/suggestion.type";

const usePostSuggestion = () => {
  const navigate = useNavigate();

  const [postData, setPostData] = useState<Suggestion>({
    title: "",
    tag: "CAFETERIA",
    text: "",
    imageUrl: "",
  });

  const image = useRecoilValue(suggestionPostImageAtom);

  const postSuggestionMutation = usePostSuggestionMutation();

  useEffect(() => {
    setPostData((prev) => ({ ...prev, imageUrl: image }));
  }, [image]);

  const onChangeTextValue = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setPostData((prev) => ({ ...prev, [name]: value }));
  };

  const onChangeCategory = (category: SuggestionTag) => {
    setPostData((prev) => ({ ...prev, tag: category }));
  };

  const onSubmitSuggestion = () => {
    if (postData.title === "") {
      window.alert("제목을 입력해주세요");
      return;
    }

    if (postData.text === "") {
      window.alert("내용을 입력해주세요");
      return;
    }

    if (postData.tag.length === 0) {
      window.alert("카테고리를 선택해주세요");
      return;
    }

    if (postSuggestionMutation.isLoading) {
      return;
    }

    postSuggestionMutation.mutate(postData, {
      onSuccess: () => {
        window.alert("건의가 추가되었습니다.");
        navigate("/");
      },
      onError: () => {
        window.alert("에러가 발생하였습니다.");
      },
    });
  };

  return {
    postData,
    onChangeTextValue,
    onChangeCategory,
    onSubmitSuggestion,
  };
};

export default usePostSuggestion;
