import { ComponentType, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGetMyMemberQuery } from "../../quries/member/member.query";
import { MemberRole } from "../../types/member/member.type";

const AuthHoc = (AuthComponent: ComponentType, role: MemberRole) => {
  const AuthCheck = () => {
    const { data, isLoading } = useGetMyMemberQuery();
    const navigate = useNavigate();
    const [isUnauthorized, setIsUnauthorized] = useState(true);

    const authExceptionHandle = () => {
      window.alert("불가능한 접근입니다.");
      setIsUnauthorized(true);
      navigate("/");
    };

    useEffect(() => {
      if (!isLoading && data === undefined) {
        authExceptionHandle();
        return;
      }

      if (data) {
        const { role: memberRole } = data.data;

        if (memberRole === "STUDENT" && role === "ADMIN") {
          authExceptionHandle();
          return;
        }

        setIsUnauthorized(false);
      }
    }, [data, isLoading]);

    return <>{isUnauthorized ? <>loading...</> : <AuthComponent />}</>;
  };

  return AuthCheck;
};

export default AuthHoc;
