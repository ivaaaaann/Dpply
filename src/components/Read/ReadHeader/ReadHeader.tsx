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
import { BsEye } from "@react-icons/all-files/bs/BsEye";
import { Suggestion } from "../../../types/suggestion/suggestion.type";

interface Props {
  data: Suggestion;
}

const ReadHeader = ({ data }: Props) => {
  const [isClick, setIsClick] = useState(false);

  return (
    <ReadHeaderContainer>
      <ReadHeaderProfileWrap>
        <ReadHeaderProfileImg />
        <ReadHeaderProfileTextWrap>
          <ReadHeaderProfileName>{data.name}</ReadHeaderProfileName>
          <ReadHeaderProfileClass>1학년 1반 18번</ReadHeaderProfileClass>
        </ReadHeaderProfileTextWrap>
        <ReadHeaderLikeButton isClick={isClick}>
          <ReadHeaderLikeButtonIcon>
            <AiFillLike />
          </ReadHeaderLikeButtonIcon>
          <ReadHeaderLikeButtonText>{data.like_count}</ReadHeaderLikeButtonText>
        </ReadHeaderLikeButton>
      </ReadHeaderProfileWrap>
      <ReadHeaderContentWrap>
        <ReadHeaderContentLeftWrap>
          <ReadHeaderContentLeftTitleWrap>
            <ReadHeaderContentLeftTitle>
              {data.title}
            </ReadHeaderContentLeftTitle>
            <ReadHeaderContentLeftTagWrap>
              {data.tags.map((tag) => (
                <ReadHeaderContentLeftTag>#{tag}</ReadHeaderContentLeftTag>
              ))}
            </ReadHeaderContentLeftTagWrap>
          </ReadHeaderContentLeftTitleWrap>
          <ReadHeaderContentLeftContent>
            {data.content}
          </ReadHeaderContentLeftContent>
          <ReadHeaderContentLeftBottomWrap>
            <ReadHeaderContentLeftBottomCreatedAt>
              {data.created_at}
            </ReadHeaderContentLeftBottomCreatedAt>
            <ReadHeaderContentLeftBottomInfoWrap>
              <ReadHeaderContentLeftBottomInfoItemWrap>
                <ReadHeaderContentLeftBottomInfoItemIcon>
                  <AiOutlineLike />
                </ReadHeaderContentLeftBottomInfoItemIcon>
                <ReadHeaderContentLeftBottomInfoItemText>
                  {data.like_count}
                </ReadHeaderContentLeftBottomInfoItemText>
                <ReadHeaderContentLeftBottomInfoItemIcon>
                  <GoComment />
                </ReadHeaderContentLeftBottomInfoItemIcon>
                <ReadHeaderContentLeftBottomInfoItemText>
                  {data.comments.length}
                </ReadHeaderContentLeftBottomInfoItemText>
                <ReadHeaderContentLeftBottomInfoItemIcon>
                  <BsEye />
                </ReadHeaderContentLeftBottomInfoItemIcon>
                <ReadHeaderContentLeftBottomInfoItemText>
                  {data.watch_count}
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
