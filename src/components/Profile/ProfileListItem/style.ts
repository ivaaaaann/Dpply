import styled from "styled-components";

export const ProfileListItemContainer = styled.div`
  width: 100%;
  min-height: 59px;
  display: flex;
  column-gap: 19px;
`;

export const ProfileListItemImg = styled.img`
  min-width: 59px;
  height: 100%;
  object-fit: cover;
  border-radius: 5px;
  background-color: #d9d9d9;
`;

export const ProfileListItemMiddleWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 2px;
`;

export const ProfileListItemMiddleName = styled.span`
  color: #909090;
  font-size: 12px;
  line-height: 14px;
`;

export const ProfileListItemMiddleTitle = styled.h1`
  font-size: 14px;
  color: black;
  font-weight: 600;
  line-height: 17px;
`;

export const ProfileListItemMiddleTagWrap = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-top: auto;
  column-gap: 9px;
`;

export const ProfileListItemTag = styled.span`
  font-size: 10px;
  line-height: 12px;
  color: #909090;
`;

export const ProfileListItemRightWrap = styled.div`
  width: 63px;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const ProfileListItemRightButtonWrap = styled.div`
  display: flex;
  align-items: center;
  color: #8a8a8a;
  column-gap: 6px;
`;

export const ProfileListItemRightButton = styled.button`
  font-size: 12px;
  height: 14px;
  background: none;
  cursor: pointer;
  border: 0px;
  outline: none;
  white-space: nowrap;
  padding: 0px;
  color: #8a8a8a;

  &:hover {
    text-decoration: underline;
  }
`;

export const ProfileListItemRightCreatedAt = styled.span`
  font-size: 12px;
  color: #8a8a8a;
  margin-top: auto;
`;
