import styled from "styled-components";
import { ellipsisLine } from "../../../../styles/libStyle";

export const MainSuggestionItemContainer = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  column-gap: 25px;
  cursor: pointer;
`;

export const MainSuggestionItemImg = styled.img`
  min-width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 5px;
  background-color: #d9d9d9;
`;

export const MainSuggestionItemContentWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const MainSuggestionItemContentName = styled.span`
  color: #8a8a8a;
  line-height: 17px;
`;

export const MainSuggestionItemContentTitle = styled.h1`
  font-size: 20px;
  color: black;
  line-height: 24px;
  margin-top: 1px;
  ${ellipsisLine(1)}
`;

export const MainSuggestionItemContentTagWrap = styled.div`
  display: flex;
  align-items: center;
  column-gap: 10px;
  margin-top: auto;
`;

export const MainSuggestionItemContentTagText = styled.span`
  color: #8a8a8a;
  font-size: 12px;
`;

export const MainSuggestionItemCreatedAt = styled.p`
  font-size: 14px;
  color: #8a8a8a;
  white-space: nowrap;
`;
