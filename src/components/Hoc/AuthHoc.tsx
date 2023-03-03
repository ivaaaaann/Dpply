import { ComponentType, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGetMyMemberQuery } from "../../quries/member/member.query";
import { MemberRole } from "../../types/member/member.type";

const AuthHoc = (AuthComponent: ComponentType, role: MemberRole) => {
  const AuthCheck = () => {
    const { data, isLoading, isError } = useGetMyMemberQuery();
    const navigate = useNavigate();
    const [isUnauthorized, setIsUnauthorized] = useState(true);

    useEffect(() => {
      if (!isLoading && !data) {
        window.alert("불가능한 접근입니다.");
        setIsUnauthorized(true);
        navigate("/");
      } else if (data) {
        const { role: memberRole } = data.data;
        if (memberRole === "STUDENT" && role === "ADMIN") {
          window.alert("불가능한 접근입니다.");
          setIsUnauthorized(true);
          navigate("/");
        } else {
          setIsUnauthorized(false);
        }
      }
    }, [data, navigate, isLoading]);

    return <>{isUnauthorized ? <>loading...</> : <AuthComponent />}</>;
  };

  return AuthCheck;
};

export default AuthHoc;
