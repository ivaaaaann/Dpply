import { ChangeEvent, useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { suggestionPostImageAtom } from "../../store/suggestion/suggestion.store";
import {
  Suggestion,
  SuggestionTag,
} from "../../types/suggestion/suggestion.type";

const usePostSuggestion = () => {
  const [postData, setPostData] = useState<Suggestion>({
    title: "",
    tag: [],
    text: "",
    imageUrl: "",
  });

  const image = useRecoilValue(suggestionPostImageAtom);

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
    const isOverlap = postData.tag.find((item) => item === category);

    if (isOverlap) {
      return;
    }

    setPostData((prev) => ({ ...prev, tag: [...prev.tag, category] }));
  };

  const onRemoveCategory = (category: SuggestionTag) => {
    setPostData((prev) => ({
      ...prev,
      tag: prev.tag.filter((item) => item !== category),
    }));
  };

  return { postData, onChangeTextValue, onChangeCategory, onRemoveCategory };
};

export default usePostSuggestion;
