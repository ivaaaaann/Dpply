import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { tagClassificationKeyword } from "../../../store/tag/tag.store";
import {
  AdiminTagItem,
  AdminDropDownContainer,
  AdminDropDownWrap,
  AdminIconBox,
} from "./AdminDropDown.style";
import { AiFillCaretDown } from "@react-icons/all-files/ai/AiFillCaretDown";
import { ADMING_TAG_ITEMS } from "../../../constants/write/write.constant";

const AdminDropDown = () => {
  const [tag, setTag] = useRecoilState(tagClassificationKeyword);
  const [fold, setFold] = useState(true);

  return (
    <AdminDropDownContainer onClick={() => setFold((prev) => !prev)}>
      {tag}
      <AdminIconBox fold={fold}>
        <AiFillCaretDown />
      </AdminIconBox>
      {!fold && (
        <AdminDropDownWrap>
          {ADMING_TAG_ITEMS.map((item) => (
            <AdiminTagItem onClick={() => setTag(item.title)}>
              {item.title}
            </AdiminTagItem>
          ))}
        </AdminDropDownWrap>
      )}
    </AdminDropDownContainer>
  );
};

export default AdminDropDown;
