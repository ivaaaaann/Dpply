import styled from "styled-components";

export const AdminListItemTr = styled.tr`
  width: 100%;
`;

export const AdminListItemTd = styled.td`
  height: 58px;
  vertical-align: middle;
  border-bottom: 1px solid #c9c9c9;
  text-align: center;
  padding: 0px 20px;
  color: black;
  font-size: 20px;
`;

export const AdminListItemAcceptWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 12px;
`;

export const AdminListItemAcceptIcon = styled.div<{ isAccept: boolean }>`
  width: 28px;
  height: 28px;
  font-size: 18px;
  color: ${({ isAccept }) => (isAccept ? "#0FA958" : "#F24E1E")};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background-color: white;
  border-radius: 100%;

  &:hover {
    filter: brightness(90%);
  }
`;
