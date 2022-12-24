import styled from "styled-components";

export const AdminMainListContainer = styled.table`
  width: 100%;
`;

export const AdminMainListThead = styled.thead`
  width: 100%;
  height: 58px;
  background-color: #f2f2f2;
  font-size: 20px;
  color: #909090;
  font-weight: 600;
`;

export const AdminMainListTr = styled.tr`
  width: 100%;
`;

export const AdminMainListTh = styled.th`
  min-width: 137px;
  vertical-align: middle;
`;

export const AdminMainListTd = styled.td`
  height: 58px;
  vertical-align: middle;
  border-bottom: 1px solid #c9c9c9;
  text-align: center;
  padding: 0px 20px;
  color: black;
  font-size: 20px;
`;

export const AdminMainListTbody = styled.tbody`
  width: 100%;
`;

export const AdminMainListAcceptWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 22px;
`;

export const AdminMainListAcceptIcon = styled.div<{ isAccept: boolean }>`
  width: 18px;
  height: 18px;
  font-size: 18px;
  color: ${({ isAccept }) => (isAccept ? "#0FA958" : "#F24E1E")};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
