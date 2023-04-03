import config from "../../config/config.json";
import {
  AuthButton,
  AuthContainer,
  AuthImg,
  AuthOverlay,
  AuthOverlayBottom,
  AuthPaper,
  AuthPaperWrap,
  AuthTitle,
  AuthWrap,
} from "./style";
import AuthImage from "../../assets/image/auth/AuthImage.svg";

const Auth = () => {
  return (
    <AuthContainer>
      <AuthWrap>
        <AuthPaper>
          <AuthPaperWrap>
            <AuthTitle>LOGIN</AuthTitle>
            <AuthButton
              onClick={() => {
                window.location.href = `http://dauth.b1nd.com/login?client_id=${config.CLIENT_ID}&redirect_uri=${config.REDIRECT_URL}`;
              }}
            >
              도담도담으로 로그인
            </AuthButton>
          </AuthPaperWrap>
        </AuthPaper>
        <AuthOverlay />
        <AuthOverlayBottom />
      </AuthWrap>
      <AuthImg src={AuthImage} />
    </AuthContainer>
  );
};

export default Auth;
