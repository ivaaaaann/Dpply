import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  ACCESS_TOKEN_KEY,
  REFRESH_TOKEN_KEY,
} from "../../constants/token/token.constant";
import cookie from "../../lib/cookie/cookie";
import { usePostAuthLogin } from "../../quries/auth/auth.query";
import { queryStringParser } from "../../utils/queryStringParser";

const useAuth = () => {
  const { search } = useLocation();
  const navigate = useNavigate();

  const postAuthLoginMutation = usePostAuthLogin();


  useEffect(() => {
    (async () => {
      postAuthLoginMutation.mutateAsync(
        { code: queryStringParser(search).code },
        {
          onSuccess: (data) => {
            console.log(data);
            cookie.setCookie(ACCESS_TOKEN_KEY, data.data.token);
            cookie.setCookie(REFRESH_TOKEN_KEY, data.data.refreshToken);
            window.alert("인증 성공");
            navigate("/");
          },
          onError: () => {
            window.alert("인증 실패");
            navigate("/auth");
          },
        }
      );
    })();
  }, [search]);

  return {};
};

export default useAuth;
