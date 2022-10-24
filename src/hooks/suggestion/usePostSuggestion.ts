import { ChangeEvent, useState } from "react";

const usePostSuggestion = () => {
  const [content, setContent] = useState<string>("");
  const [tempHashTag, setTempHashTag] = useState<string>("");
  const [hashTag, setHashTag] = useState<string[]>([]);

  const onAddHashTag = () => {
    setHashTag((prev) => [...prev]);
  };

  const onChangeHashTag = (e: ChangeEvent<HTMLInputElement>) =>
    setTempHashTag(e.target.value);

  return {};
};

export default usePostSuggestion;
