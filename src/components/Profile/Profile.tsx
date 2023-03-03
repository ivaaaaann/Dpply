import { SuggestionPreview } from "../../types/suggestion/suggestion.type";
import ProfileApproveList from "./ProfileApproveList/ProfileApproveList";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import ProfilePendingList from "./ProfilePendingList/ProfilePendingList";
import { ProfileContainer, ProfileWrap } from "./style";

const TEST: SuggestionPreview[] = [];

const Profile = () => {
  return (
    <ProfileContainer>
      <ProfileWrap>
        <ProfileInfo />
        <ProfilePendingList data={TEST} />
        <ProfileApproveList data={TEST} />
      </ProfileWrap>
    </ProfileContainer>
  );
};

export default Profile;
