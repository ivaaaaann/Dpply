import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { ACCESS_TOKEN_KEY } from "../../constants/token/token.constant";
import token from "../../lib/token/token";
import { useGetMyMemberQuery } from "../../quries/member/member.query";

const useAuthCheck = () => {
  const [isLogin, setIsLogin] = useState(false);
  const { data } = useGetMyMemberQuery();
  const location = useLocation();

  useEffect(() => {
    if (token.getToken(ACCESS_TOKEN_KEY) && data !== undefined) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  }, [location, data]);

  return { isLogin, data };
};

export default useAuthCheck;
