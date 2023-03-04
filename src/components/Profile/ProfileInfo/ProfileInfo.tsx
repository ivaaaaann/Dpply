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
        <ProfileInfoImg src={serverMyMemberData?.data.profileImage} />
        <ProfileInfoTextWrap>
          <ProfileInfoName>{serverMyMemberData?.data.name}</ProfileInfoName>
          <ProfileInfoClass>
            {`${serverMyMemberData?.data.grade}학년 ${serverMyMemberData?.data.room}반 ${serverMyMemberData?.data.number}번`}
          </ProfileInfoClass>
        </ProfileInfoTextWrap>
      </ProfileInfoWrap>
      <ProfileTagList />
    </ProfileInfoContainer>
  );
};

export default ProfileInfo;
