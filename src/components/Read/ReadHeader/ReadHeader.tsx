import { useState } from "react";
import * as S from "./style";
import { AiFillLike } from "@react-icons/all-files/ai/AiFillLike";
import { AiOutlineLike } from "@react-icons/all-files/ai/AiOutlineLike";
import { GoComment } from "@react-icons/all-files/go/GoComment";
import dataTransform from "../../../utils/transform/dataTransform";
import { useParams } from "react-router-dom";
import {
  useGetSuggestionQuery,
  useGetSuggestionCommentsQuery,
} from "../../../quries/suggestion/suggestion.query";
import useLikeSuggestion from "../../../hooks/suggestion/useLikeSuggestion";
import { useGetMyMemberQuery } from "../../../quries/member/member.query";

const ReadHeader = () => {
  const { id } = useParams();

  const { data: serverSuggestionData } = useGetSuggestionQuery({
    id: Number(id),
  });
  const { data: serverCommentsData } = useGetSuggestionCommentsQuery({
    id: Number(id),
  });
  const { data: serverMyMemberData } = useGetMyMemberQuery();

  const { isLike, likeCount, onToggleIsLike } = useLikeSuggestion({
    prevIsLike: !!serverSuggestionData?.data.sympathyUser.find(
      (user) => user.uniqueId === serverMyMemberData?.data.uniqueId
    ),
    id: Number(id),
    prevLikeCount: serverSuggestionData?.data.sympathyCount || 0,
  });

  return (
    <S.ReadHeaderContainer>
      <S.ReadHeaderProfileWrap>
        <S.ReadHeaderProfileImg
          src={serverSuggestionData?.data.user.profileImage}
        />
        <S.ReadHeaderProfileTextWrap>
          <S.ReadHeaderProfileName>
            {serverSuggestionData?.data.user.name}
          </S.ReadHeaderProfileName>
          <S.ReadHeaderProfileClass>{`${serverSuggestionData?.data.user.grade}학년 ${serverSuggestionData?.data.user.room}반 ${serverSuggestionData?.data.user.number}번`}</S.ReadHeaderProfileClass>
        </S.ReadHeaderProfileTextWrap>
        <S.ReadHeaderLikeButton isLike={isLike} onClick={onToggleIsLike}>
          <S.ReadHeaderLikeButtonIcon>
            <AiFillLike />
          </S.ReadHeaderLikeButtonIcon>
          <S.ReadHeaderLikeButtonText>{likeCount}</S.ReadHeaderLikeButtonText>
        </S.ReadHeaderLikeButton>
      </S.ReadHeaderProfileWrap>
      <S.ReadHeaderContentWrap>
        <S.ReadHeaderContentLeftWrap>
          <S.ReadHeaderContentLeftTitleWrap>
            <S.ReadHeaderContentLeftTitle>
              {serverSuggestionData?.data.title}
            </S.ReadHeaderContentLeftTitle>
            <S.ReadHeaderContentLeftTagWrap>
              {serverSuggestionData && (
                <S.ReadHeaderContentLeftTag>
                  #{dataTransform.tagTransform(serverSuggestionData?.data.tag)}
                </S.ReadHeaderContentLeftTag>
              )}
            </S.ReadHeaderContentLeftTagWrap>
          </S.ReadHeaderContentLeftTitleWrap>
          <S.ReadHeaderContentLeftContent>
            {serverSuggestionData?.data.text}
          </S.ReadHeaderContentLeftContent>
          <S.ReadHeaderContentLeftBottomWrap>
            <S.ReadHeaderContentLeftBottomCreatedAt>
              {serverSuggestionData?.data.createAt}
            </S.ReadHeaderContentLeftBottomCreatedAt>
            <S.ReadHeaderContentLeftBottomInfoWrap>
              <S.ReadHeaderContentLeftBottomInfoItemWrap>
                <S.ReadHeaderContentLeftBottomInfoItemIcon>
                  <AiOutlineLike />
                </S.ReadHeaderContentLeftBottomInfoItemIcon>
                <S.ReadHeaderContentLeftBottomInfoItemText>
                  {likeCount}
                </S.ReadHeaderContentLeftBottomInfoItemText>
                <S.ReadHeaderContentLeftBottomInfoItemIcon>
                  <GoComment />
                </S.ReadHeaderContentLeftBottomInfoItemIcon>
                <S.ReadHeaderContentLeftBottomInfoItemText>
                  {serverCommentsData?.data.length}
                </S.ReadHeaderContentLeftBottomInfoItemText>
              </S.ReadHeaderContentLeftBottomInfoItemWrap>
            </S.ReadHeaderContentLeftBottomInfoWrap>
          </S.ReadHeaderContentLeftBottomWrap>
        </S.ReadHeaderContentLeftWrap>
        <S.ReadHeaderContentRightImg
          src={serverSuggestionData?.data.imageUrl}
        />
      </S.ReadHeaderContentWrap>
    </S.ReadHeaderContainer>
  );
};

export default ReadHeader;
