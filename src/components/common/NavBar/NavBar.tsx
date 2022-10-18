import {
  NavBarContainer,
  NavBarLoginText,
  NavBarLogo,
  NavBarWriteButton,
  NavBarWriteButtonIcon,
  NavBarWriteButtonText,
} from "./style";
import NavLogo from "../../../assets/logo/logo.svg";
import NavBarSearch from "./NavBarSearch/NavBarSearch";
import { FaPen } from "@react-icons/all-files/fa/FaPen";
import { useNavigate } from "react-router-dom";
import useAuthCheck from "../../../hooks/auth/useAuthCheck";

const NavBar = () => {
  const navigate = useNavigate();

  const { isLogin } = useAuthCheck();

  return (
    <NavBarContainer>
      <NavBarLogo src={NavLogo} />
      <NavBarSearch />
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
