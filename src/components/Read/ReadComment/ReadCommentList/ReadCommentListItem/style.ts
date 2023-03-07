import styled, { css } from "styled-components";
import { palette } from "../../../../../styles/palette";

export const ReadCommentListItemContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ReadCommentListItemProfileWrap = styled.div`
  display: flex;
  align-items: center;
  column-gap: 20px;
`;

export const ReadCommentListItemProfileImg = styled.img`
  width: 80px;
  height: 80px;
  background-color: #f2f2f2;
  border-radius: 100%;
`;

export const ReadCommentListItemProfileTextWrap = styled.div`
  display: flex;
  align-items: center;
  column-gap: 10px;
`;

export const ReadCommentListItemProfileName = styled.h1`
  font-size: 24px;
  color: black;
  font-weight: 600;
`;

export const ReadCommentListItemProfileCreatedAt = styled.span`
  font-size: 20px;
  color: #909090;
`;

export const ReadCommentListItemTextWrap = styled.div`
  display: flex;
  align-items: flex-start;
`;

export const ReadCommentListItemTextRoot = styled.div<{ isLast: boolean }>`
  max-width: 1px;
  min-width: 1px;
  overflow: hidden;
  height: 80px;
  border: 0px;
  border-right: 1px solid #909090;
  margin-left: 40px;
  margin-right: 60px;
  margin-top: 15px;

  ${({ isLast }) =>
    isLast &&
    css`
      visibility: hidden;
    `}
`;

export const ReadCommentListItemText = styled.div`
  max-width: 1200px;
  height: 80px;
  padding: 12px 40px;
  font-size: 24px;
  color: black;
  display: flex;
  align-items: center;
  border-radius: 100px;
  border: 1px solid ${palette.main};
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  word-break: break-all;
  line-height: 28px;
`;
