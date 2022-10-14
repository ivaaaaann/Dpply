import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { usePostAuthLogin } from "../../quries/auth/auth.query";
import { queryStringParser } from "../../utils/queryStringParser";

const useAuth = () => {
  const { search } = useLocation();
  const navigate = useNavigate();

  const postAuthLoginMutation = usePostAuthLogin();

  useEffect(() => {
    (async () => {
      postAuthLoginMutation.mutateAsync(
        { code: queryStringParser(search)[0] },
        {
          onSuccess: () => {
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
