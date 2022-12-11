import { ChangeEvent, useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { suggestionPostImageAtom } from "../../store/suggestion/suggestion.store";
import { Suggestion } from "../../types/suggestion/suggestion.type";

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

  return { postData, onChangeTextValue };
};

export default usePostSuggestion;
