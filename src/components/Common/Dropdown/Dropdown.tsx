import * as S from "./style";
import { FiMoreVertical } from "@react-icons/all-files/fi/FiMoreVertical";
import { DropdownProps } from "./Dropdown.types";
import useOutsideClick from "../../../hooks/common/useOutsideClick";
import { useRef, useState } from "react";

const Dropdown = ({ items }: DropdownProps) => {
  const [isFold, setIsFold] = useState(true);

  const itemWrapRef = useRef(null);
  const containerRef = useRef(null);

  useOutsideClick({
    callback: () => setIsFold(true),
    container: [itemWrapRef.current, containerRef.current],
  });

  return (
    <S.Container ref={containerRef} onClick={() => setIsFold((prev) => !prev)}>
      <S.Icon>
        <FiMoreVertical />
      </S.Icon>
      {!isFold && (
        <S.ItemWrap ref={itemWrapRef}>
          {items.map((item) => (
            <S.Item onClick={item.func}>{item.title}</S.Item>
          ))}
        </S.ItemWrap>
      )}
    </S.Container>
  );
};

export default Dropdown;
