import {
  NavBarAdminText,
  NavBarContainer,
  NavBarLoginText,
  NavBarLogo,
  NavBarLogoWrap,
  NavBarWriteButton,
  NavBarWriteButtonIcon,
  NavBarWriteButtonText,
} from "./style";
import NavLogo from "../../../assets/logo/logo.svg";
import NavBarSearch from "./NavBarSearch/NavBarSearch";
import { FaPen } from "@react-icons/all-files/fa/FaPen";
import { useLocation, useNavigate } from "react-router-dom";
import useAuthCheck from "../../../hooks/auth/useAuthCheck";

const NavBar = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { isLogin } = useAuthCheck();

  const isAdmin = pathname.split("/")[1] === "admin";

  return (
    <NavBarContainer>
      <NavBarLogoWrap>
        <NavBarLogo src={NavLogo} onClick={() => navigate("/")} />
        {isAdmin && <NavBarAdminText>Admin</NavBarAdminText>}
      </NavBarLogoWrap>
      {/* <NavBarSearch /> */}
      {isLogin ? (
        <NavBarWriteButton>
          <NavBarWriteButtonIcon>
            <FaPen />
          </NavBarWriteButtonIcon>
          <NavBarWriteButtonText onClick={() => navigate("/write")}>
            글쓰기
          </NavBarWriteButtonText>
        </NavBarWriteButton>
      ) : (
        <NavBarLoginText onClick={() => navigate("/auth")}>
          로그인
        </NavBarLoginText>
      )}
    </NavBarContainer>
  );
};

export default NavBar;
