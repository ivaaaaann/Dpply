import { useNavigate } from "react-router-dom";
import useAuthCheck from "../../../../../hooks/auth/useAuthCheck";
import {
  MainProfileHeaderClass,
  MainProfileHeaderContainer,
  MainProfileHeaderImg,
  MainProfileHeaderInfoWrap,
  MainProfileHeaderName,
} from "./style";

const MainProfileHeader = () => {
  const { data, isLogin } = useAuthCheck();
  const navigate = useNavigate();

  return (
    <MainProfileHeaderContainer>
      <MainProfileHeaderImg />
      {isLogin ? (
        <MainProfileHeaderInfoWrap>
          <MainProfileHeaderName
            onClick={() => navigate("/profile?tag=전체조회")}
          >
            {data?.data.name}
          </MainProfileHeaderName>
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
