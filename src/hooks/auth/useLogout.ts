import token from "../../lib/token/token";

const useLogout = () => {
  const logout = () => {
    token.clearToken();
    window.location.reload();
  };

  return { logout };
};

export default useLogout;
