import { useGetMyMember } from "../../../../../quries/member/member.query";
import {
  MainProfileHeaderClass,
  MainProfileHeaderContainer,
  MainProfileHeaderImg,
  MainProfileHeaderInfoWrap,
  MainProfileHeaderName,
} from "./style";

const MainProfileHeader = () => {
  const { data } = useGetMyMember();

  return (
    <MainProfileHeaderContainer>
      <MainProfileHeaderImg />
      <MainProfileHeaderInfoWrap>
        <MainProfileHeaderName>{data?.data.name}</MainProfileHeaderName>
        <MainProfileHeaderClass>
          {data?.data.grade}학년 {data?.data.room}반 {data?.data.number}번
        </MainProfileHeaderClass>
      </MainProfileHeaderInfoWrap>
    </MainProfileHeaderContainer>
  );
};

export default MainProfileHeader;
