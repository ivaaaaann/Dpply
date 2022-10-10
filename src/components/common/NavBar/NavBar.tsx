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
import { useEffect, useState } from "react";
import cookie from "../../../lib/cookie/cookie";
import { ACCESS_TOKEN_KEY } from "../../../constants/token/token.constant";
import { FaPen } from "@react-icons/all-files/fa/FaPen";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const [isLogin, setIsLogin] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (cookie.getCookie(ACCESS_TOKEN_KEY)) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  }, []);

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
