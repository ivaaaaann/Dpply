import { useNavigate } from "react-router-dom";
import useAuthCheck from "../../../../../hooks/auth/useAuthCheck";
import useLogout from "../../../../../hooks/auth/useLogout";
import {
  MainProfileHeaderClass,
  MainProfileHeaderContainer,
  MainProfileHeaderImg,
  MainProfileHeaderInfoWrap,
  MainProfileHeaderLoginButton,
  MainProfileHeaderName,
  MainProfileHeaderNameWrap,
  MainProfileHeaderNotLogin,
  MainProfileLogoutButton,
} from "./style";
import DefaultProfile from "../../../../../assets/image/common/defaultProfile.png";

const MainProfileHeader = () => {
  const { data, isLogin } = useAuthCheck();
  const navigate = useNavigate();
  const { logout } = useLogout();

  return (
    <MainProfileHeaderContainer>
      <MainProfileHeaderImg src={data?.data.profileImage || DefaultProfile} />
      <MainProfileHeaderInfoWrap>
        {isLogin ? (
          <>
            <MainProfileHeaderNameWrap>
              <MainProfileHeaderName
                onClick={() => navigate("/profile?tag=전체조회")}
              >
                {data?.data.name}
              </MainProfileHeaderName>
              <MainProfileLogoutButton onClick={logout}>
                로그아웃
              </MainProfileLogoutButton>
            </MainProfileHeaderNameWrap>
            <MainProfileHeaderClass>
              {data?.data.grade}학년 {data?.data.room}반 {data?.data.number}번
            </MainProfileHeaderClass>
          </>
        ) : (
          <>
            <MainProfileHeaderNotLogin>
              로그인이 필요합니다
            </MainProfileHeaderNotLogin>
            <MainProfileHeaderLoginButton onClick={() => navigate("/auth")}>
              로그인
            </MainProfileHeaderLoginButton>
          </>
        )}
      </MainProfileHeaderInfoWrap>
    </MainProfileHeaderContainer>
  );
};

export default MainProfileHeader;
