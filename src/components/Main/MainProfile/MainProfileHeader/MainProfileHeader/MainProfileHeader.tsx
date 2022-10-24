import useAuthCheck from "../../../../../hooks/auth/useAuthCheck";
import { useGetMyMember } from "../../../../../quries/member/member.query";
import {
  MainProfileHeaderClass,
  MainProfileHeaderContainer,
  MainProfileHeaderImg,
  MainProfileHeaderInfoWrap,
  MainProfileHeaderName,
} from "./style";

const MainProfileHeader = () => {
  const { data, isLogin } = useAuthCheck();

  return (
    <MainProfileHeaderContainer>
      <MainProfileHeaderImg />
      {isLogin ? (
        <MainProfileHeaderInfoWrap>
          <MainProfileHeaderName>{data?.data.name}</MainProfileHeaderName>
          <MainProfileHeaderClass>
            {data?.data.grade}학년 {data?.data.room}반 {data?.data.number}번
          </MainProfileHeaderClass>
        </MainProfileHeaderInfoWrap>
      ) : (
        <>로그인이 필요합니다</>
      )}
    </MainProfileHeaderContainer>
  );
};

export default MainProfileHeader;
