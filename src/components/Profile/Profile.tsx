import ProfileApproveList from "./ProfileApproveList/ProfileApproveList";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import ProfilePendingList from "./ProfilePendingList/ProfilePendingList";
import { ProfileContainer, ProfileWrap } from "./style";

const Profile = () => {
  return (
    <ProfileContainer>
      <ProfileWrap>
        <ProfileInfo />
        <ProfilePendingList />
        <ProfileApproveList />
      </ProfileWrap>
    </ProfileContainer>
  );
};

export default Profile;
