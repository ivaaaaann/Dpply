import { useState } from "react";
import {
  ReadHeaderContentWrap,
  ReadHeaderContainer,
  ReadHeaderLikeButton,
  ReadHeaderLikeButtonIcon,
  ReadHeaderLikeButtonText,
  ReadHeaderProfileClass,
  ReadHeaderProfileImg,
  ReadHeaderProfileName,
  ReadHeaderProfileTextWrap,
  ReadHeaderProfileWrap,
  ReadHeaderContentLeftWrap,
  ReadHeaderContentLeftTitleWrap,
  ReadHeaderContentLeftTitle,
  ReadHeaderContentLeftTagWrap,
  ReadHeaderContentLeftTag,
  ReadHeaderContentLeftContent,
  ReadHeaderContentRightImg,
  ReadHeaderContentLeftBottomWrap,
  ReadHeaderContentLeftBottomCreatedAt,
  ReadHeaderContentLeftBottomInfoWrap,
  ReadHeaderContentLeftBottomInfoItemWrap,
  ReadHeaderContentLeftBottomInfoItemIcon,
  ReadHeaderContentLeftBottomInfoItemText,
} from "./style";
import { AiFillLike } from "@react-icons/all-files/ai/AiFillLike";
import { AiOutlineLike } from "@react-icons/all-files/ai/AiOutlineLike";
import { GoComment } from "@react-icons/all-files/go/GoComment";
import { SuggestionDetail } from "../../../types/suggestion/suggestion.type";
import dataTransform from "../../../utils/transform/dataTransform";

interface Props {
  data: SuggestionDetail;
}

const ReadHeader = ({ data }: Props) => {
  const [isClick, setIsClick] = useState(false);

  return (
    <ReadHeaderContainer>
      <ReadHeaderProfileWrap>
        <ReadHeaderProfileImg />
        <ReadHeaderProfileTextWrap>
          <ReadHeaderProfileName>{data.user.name}</ReadHeaderProfileName>
          <ReadHeaderProfileClass>1학년 1반 18번</ReadHeaderProfileClass>
        </ReadHeaderProfileTextWrap>
        <ReadHeaderLikeButton isClick={isClick}>
          <ReadHeaderLikeButtonIcon>
            <AiFillLike />
          </ReadHeaderLikeButtonIcon>
          <ReadHeaderLikeButtonText>
            {data.sympathyCount}
          </ReadHeaderLikeButtonText>
        </ReadHeaderLikeButton>
      </ReadHeaderProfileWrap>
      <ReadHeaderContentWrap>
        <ReadHeaderContentLeftWrap>
          <ReadHeaderContentLeftTitleWrap>
            <ReadHeaderContentLeftTitle>
              {data.title}
            </ReadHeaderContentLeftTitle>
            <ReadHeaderContentLeftTagWrap>
              {data.tag.map((tag) => (
                <ReadHeaderContentLeftTag>
                  #{dataTransform.tagTransform(tag)}
                </ReadHeaderContentLeftTag>
              ))}
            </ReadHeaderContentLeftTagWrap>
          </ReadHeaderContentLeftTitleWrap>
          <ReadHeaderContentLeftContent>
            {data.text}
          </ReadHeaderContentLeftContent>
          <ReadHeaderContentLeftBottomWrap>
            <ReadHeaderContentLeftBottomCreatedAt>
              {data.createAt}
            </ReadHeaderContentLeftBottomCreatedAt>
            <ReadHeaderContentLeftBottomInfoWrap>
              <ReadHeaderContentLeftBottomInfoItemWrap>
                <ReadHeaderContentLeftBottomInfoItemIcon>
                  <AiOutlineLike />
                </ReadHeaderContentLeftBottomInfoItemIcon>
                <ReadHeaderContentLeftBottomInfoItemText>
                  {data.sympathyCount}
                </ReadHeaderContentLeftBottomInfoItemText>
                <ReadHeaderContentLeftBottomInfoItemIcon>
                  <GoComment />
                </ReadHeaderContentLeftBottomInfoItemIcon>
                <ReadHeaderContentLeftBottomInfoItemText>
                  4
                </ReadHeaderContentLeftBottomInfoItemText>
              </ReadHeaderContentLeftBottomInfoItemWrap>
            </ReadHeaderContentLeftBottomInfoWrap>
          </ReadHeaderContentLeftBottomWrap>
        </ReadHeaderContentLeftWrap>
        <ReadHeaderContentRightImg />
      </ReadHeaderContentWrap>
    </ReadHeaderContainer>
  );
};

export default ReadHeader;
