import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { ACCESS_TOKEN_KEY } from "../../constants/token/token.constant";
import token from "../../lib/token/token";

const useAuthCheck = () => {
  const [isLogin, setIsLogin] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (token.getToken(ACCESS_TOKEN_KEY)) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  }, [location]);

  return { isLogin };
};

export default useAuthCheck;
