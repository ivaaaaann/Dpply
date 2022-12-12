import { ChangeEvent, DragEvent, useCallback, useState } from "react";
import { useRecoilState } from "recoil";
import { suggestionPostImageAtom } from "../../store/suggestion/suggestion.store";

const useUploadSuggestionImage = () => {
  const [isDrag, setIsDrag] = useState(false);
  const [image, setImage] = useRecoilState(suggestionPostImageAtom);

  const onChangeImage = useCallback(
    (e: ChangeEvent<HTMLInputElement> | any) => {
      let image: File;
      if (e.type === "drop") {
        image = e.dataTransfer.files[0];
      } else {
        image = e.target.files[0];
      }
      const formData = new FormData();
      formData.append("img", image);
    },
    []
  );

  const dropHandler = useCallback(
    (e: DragEvent) => {
      e.preventDefault();
      e.stopPropagation();
      setIsDrag(false);
      if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
        onChangeImage(e);
        e.dataTransfer.clearData();
      }
    },
    [onChangeImage]
  );

  const dragHandler = useCallback((e: DragEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (e.dataTransfer.files) {
      setIsDrag(true);
    }
  }, []);

  const dragInHandler = useCallback((e: DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  }, []);

  const dragOutHandler = useCallback((e: DragEvent) => {
    e.preventDefault();
    e.stopPropagation();

    setIsDrag(false);
  }, []);

  return {
    dropHandler,
    dragHandler,
    dragInHandler,
    dragOutHandler,
    onChangeImage,
    isDrag,
  };
};

export default useUploadSuggestionImage;
