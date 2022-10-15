import React, { DragEvent, useEffect, useRef, useState } from "react";

const useUploadImage = () => {
  const uploadBoxRef = useRef<HTMLElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [isDrag, setIsDrag] = useState(false);
  const [dragCount, setDragCount] = useState(0);
  const [image, setImage] = useState<DataTransferItem>();

  const dropHandler = (e: DragEvent<Element>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDrag(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleInputImage(e, "drag");
    }
  };

  const dragHandler = (e: DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const dragInHandler = (e: DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (dragCount < 2) setDragCount((prev) => prev + 1);
    if (e.dataTransfer.items && e.dataTransfer.items.length > 0) {
      setIsDrag(true);
    }
  };

  const dragOutHandler = (e: DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragCount((prev) => prev - 1);
    if (dragCount === 0) setIsDrag(false);
  };

  const dragOverHandler = (e: DragEvent<Element>) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    console.log(files);
  };

  const handleInputImage = (e: any, type: "drag" | "unDrag") => {
    if (type === "drag") {
      setImage(e.dataTransfer.items[0]);
    } else if (type === "unDrag") {
      setImage(e.target.files[0]);
    }
  };

  useEffect(() => {
    const uploadBox = uploadBoxRef.current;
    const input = inputRef.current;

    uploadBox?.addEventListener("drop", (e) => dropHandler(e));
    uploadBox?.addEventListener("dragover", dragOverHandler);
    input?.addEventListener("change", changeHandler);

    return () => {};
  }, []);

  return { uploadBoxRef, inputRef };
};

export default useUploadImage;
