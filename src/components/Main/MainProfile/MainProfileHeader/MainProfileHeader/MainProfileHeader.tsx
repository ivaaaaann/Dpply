import {
  MainProfileHeaderClass,
  MainProfileHeaderContainer,
  MainProfileHeaderImg,
  MainProfileHeaderInfoWrap,
  MainProfileHeaderName,
} from "./style";

const MainProfileHeader = () => {
  return (
    <MainProfileHeaderContainer>
      <MainProfileHeaderImg />
      <MainProfileHeaderInfoWrap>
        <MainProfileHeaderName>백승하</MainProfileHeaderName>
        <MainProfileHeaderClass>1학년 3반 10번</MainProfileHeaderClass>
      </MainProfileHeaderInfoWrap>
    </MainProfileHeaderContainer>
  );
};

export default MainProfileHeader;
