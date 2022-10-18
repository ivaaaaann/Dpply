import useAuth from "../../hooks/auth/useAuth";

const AuthLoading = () => {
  useAuth();

  return <div></div>;
};

export default AuthLoading;
