import styled, { css } from "styled-components";
import { palette } from "../../../styles/palette";

export const ReadHeaderContainer = styled.div`
  width: 100%;
  height: 680px;
  display: flex;
  flex-direction: column;
`;

export const ReadHeaderProfileWrap = styled.div`
  display: flex;
`;

export const ReadHeaderProfileImg = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 100%;
  background-color: #f2f2f2;
`;

export const ReadHeaderProfileTextWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 20px;
  margin-right: auto;
`;

export const ReadHeaderProfileName = styled.h1`
  color: black;
  font-size: 30px;
  line-height: 36px;
  font-weight: 600;
`;

export const ReadHeaderProfileClass = styled.p`
  color: #909090;
  font-size: 24px;
  line-height: 29px;
`;

export const ReadHeaderLikeButton = styled.button<{ isLike: boolean }>`
  width: 100px;
  height: 50px;
  border-radius: 100px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 3px;
  box-sizing: border-box;
  border: 1px solid #c9c9c9;
  margin-top: auto;
  cursor: pointer;

  ${({ isLike }) =>
    isLike
      ? css`
          background-color: ${palette.main};
          color: white;
          border: 0px;
        `
      : css`
          background-color: white;
          color: #909090;
        `}
`;

export const ReadHeaderLikeButtonIcon = styled.div`
  width: 20px;
  height: 20px;
  font-size: 20px;
`;

export const ReadHeaderLikeButtonText = styled.p`
  font-size: 24px;
`;

export const ReadHeaderContentWrap = styled.div`
  width: 100%;
  display: flex;
  column-gap: 39px;
  margin-top: 50px;
`;

export const ReadHeaderContentLeftWrap = styled.div`
  width: 931px;
  display: flex;
  flex-direction: column;
`;

export const ReadHeaderContentLeftTitleWrap = styled.div`
  display: flex;
  align-items: flex-end;
  column-gap: 23px;
`;

export const ReadHeaderContentLeftTitle = styled.h1`
  font-size: 40px;
  color: black;
  font-weight: 600;
`;

export const ReadHeaderContentLeftTagWrap = styled.div`
  display: flex;
  align-items: center;
  column-gap: 14px;
`;

export const ReadHeaderContentLeftTag = styled.span`
  color: ${palette.main};
  font-size: 24px;
`;

export const ReadHeaderContentLeftContent = styled.pre`
  width: 100%;
  height: 100%;
  font-size: 24px;
  color: black;
  margin-top: 35px;
  white-space: pre-wrap;
  word-break: keep-all;
  line-height: 29px;
`;

export const ReadHeaderContentLeftBottomWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 1px;
  margin-top: auto;
`;

export const ReadHeaderContentLeftBottomCreatedAt = styled.p`
  font-size: 24px;
  line-height: 29px;
  color: #8a8a8a;
`;

export const ReadHeaderContentLeftBottomInfoWrap = styled.div`
  display: flex;
  align-items: center;
  column-gap: 20px;
  color: #8a8a8a;
`;

export const ReadHeaderContentLeftBottomInfoItemWrap = styled.div`
  display: flex;
  align-items: center;
  column-gap: 10px;
`;

export const ReadHeaderContentLeftBottomInfoItemIcon = styled.div`
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
`;

export const ReadHeaderContentLeftBottomInfoItemText = styled.span`
  font-size: 24px;
  line-height: 29px;
`;

export const ReadHeaderContentRightImg = styled.img`
  min-width: 550px;
  height: 550px;
  background-color: #d9d9d9;
`;
