import styled from "styled-components";
import { ellipsisLine } from "../../../../styles/libStyle";

export const MainProfileItemContainer = styled.div`
  width: 100%;
  height: 59px;
  display: flex;
  justify-content: space-between;
  column-gap: 19px;
  cursor: pointer;
`;

export const MainProfileItemImg = styled.img`
  min-width: 59px;
  max-width: 59px;
  height: 59px;
  background-color: #d9d9d9;
  border-radius: 5px;
`;

export const MainProfileItemContentWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const MainProfileItemContentName = styled.span`
  color: #8a8a8a;
  font-size: 12px;
  line-height: 14px;
`;

export const MainProfileItemContentTitle = styled.h1`
  color: black;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  margin-top: 2px;
  ${ellipsisLine(1)}
`;

export const MainProfileItemContentTagWrap = styled.div`
  display: flex;
  align-items: center;
  column-gap: 5px;
  margin-top: auto;
`;

export const MainProfileItemContentTagText = styled.span`
  font-size: 10px;
  color: #8a8a8a;
`;

export const MainProfileItemContentCreatedAt = styled.span`
  font-size: 12px;
  color: #8a8a8a;
  margin-top: auto;
  white-space: nowrap;
`;
