import styled from "styled-components";

export const MainContainer = styled.div`
  width: 100%;
  max-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MainBannerWrap = styled.div`
  width: 100%;
  min-height: 320px;
  padding: 0px 51px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: start;
`;

export const MainBannerTextWrap = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 7px;
`;

export const MainBannerDescription = styled.p`
  font-size: 20px;
  color: black;
  line-height: 24px;
`;

export const MainBannerTitle = styled.h1`
  line-height: 57px;
  color: black;
  font-size: 48px;
`;

export const MainWrap = styled.div`
  width: 100%;
  height: 675px;
  display: flex;
  justify-content: center;
  padding: 0px 200px;
  padding-top: 43px;
  padding-bottom: 68px;
  background-color: white;
  column-gap: 50px;
  box-sizing: border-box;
`;

export const MainSectionWrap = styled.div`
  width: 100%;
  border-bottom: 1px solid #ffbb4c;
  padding: 0px 15px;
  padding-bottom: 12px;
  display: flex;
  align-items: flex-end;
  margin-bottom: 25px;
  box-sizing: border-box;
`;

export const MainSectionTextWrap = styled.div`
  display: flex;
  align-items: center;
  column-gap: 7px;
`;

export const MainSectionTextIcon = styled.div`
  width: 25px;
  height: 25px;
  font-size: 25px;
  color: black;
`;

export const MainSectionText = styled.h1`
  font-size: 24px;
  color: black;
  font-weight: 600;
  color: black;
`;
