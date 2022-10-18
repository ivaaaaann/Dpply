import { ComponentType, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useGetMyMember } from "../../quries/member/member.query";
import { MemberRole } from "../../types/member/member.type";

const AuthHoc = (AuthComponent: ComponentType, role: MemberRole) => {
  const AuthCheck = () => {
    const { data, isError } = useGetMyMember();

    const navigate = useNavigate();

    useEffect(() => {
      if (isError) {
        window.alert("불가능한 접근입니다.");
        navigate("/");
      } else {
        if (data) {
          const { role: memberRole } = data.data;

          if (memberRole === "STUDENT" && role === "ADMIN") {
            window.alert("불가능한 접근입니다.");
            navigate("/");
          }
        }
      }
    }, [data, isError]);

    return <AuthComponent />;
  };

  return AuthCheck;
};

export default AuthHoc;