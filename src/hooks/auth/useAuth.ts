import { useCallback, useEffect } from "react";
import { useQueryClient } from "react-query";
import { useLocation, useNavigate } from "react-router-dom";
import {
  ACCESS_TOKEN_KEY,
  REFRESH_TOKEN_KEY,
} from "../../constants/token/token.constant";
import token from "../../lib/token/token";
import { usePostAuthLoginMutation } from "../../quries/auth/auth.query";
import { queryStringParser } from "../../utils/queryStringParser";

const useAuth = () => {
  const { search } = useLocation();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const postAuthLoginMutation = usePostAuthLoginMutation();

  const login = useCallback(() => {
    postAuthLoginMutation.mutateAsync(
      { code: queryStringParser(search).code },
      {
        onSuccess: (data) => {
          console.log(data);
          token.setToken(ACCESS_TOKEN_KEY, data.data.token);
          token.setToken(REFRESH_TOKEN_KEY, data.data.refreshToken);
          queryClient.invalidateQueries("member/getMyMember");
          window.alert("인증 성공");
          navigate("/");
        },
        onError: () => {
          window.alert("인증 실패");
          navigate("/auth");
          token.clearToken();
        },
      }
    );
  }, [search]);

  useEffect(() => {
    login();
  }, [login]);

  return {};
};

export default useAuth;
