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
        <MainProfileHeaderName>최희건</MainProfileHeaderName>
        <MainProfileHeaderClass>1학년 1반 18번</MainProfileHeaderClass>
      </MainProfileHeaderInfoWrap>
    </MainProfileHeaderContainer>
  );
};

export default MainProfileHeader;
