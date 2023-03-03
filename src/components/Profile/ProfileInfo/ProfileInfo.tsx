import { useGetMyMemberQuery } from "../../../quries/member/member.query";
import ProfileTagList from "./ProfileTagList/ProfileTagList";
import {
  ProfileInfoClass,
  ProfileInfoContainer,
  ProfileInfoImg,
  ProfileInfoName,
  ProfileInfoTextWrap,
  ProfileInfoWrap,
} from "./style";

const ProfileInfo = () => {
  const { data: serverMyMemberData } = useGetMyMemberQuery();

  return (
    <ProfileInfoContainer>
      <ProfileInfoWrap>
        <ProfileInfoImg />
        <ProfileInfoTextWrap>
          <ProfileInfoName>임동현</ProfileInfoName>
          <ProfileInfoClass>1학년 2반 3번</ProfileInfoClass>
        </ProfileInfoTextWrap>
      </ProfileInfoWrap>
      <ProfileTagList />
    </ProfileInfoContainer>
  );
};

export default ProfileInfo;
