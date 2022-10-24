import { SuggestionPreview } from "../../../types/suggestion/suggestion.type";
import ProfileListItem from "../ProfileListItem/ProfileListItem";
import ProfileSectionTitle from "../ProfileSectionTitle/ProfileSectionTitle";
import { ProfilePendingListContainer, ProfilePendingListWrap } from "./style";

interface Props {
  data: SuggestionPreview[];
}

const ProfilePendingList = ({ data }: Props) => {
  return (
    <ProfilePendingListContainer>
      <ProfileSectionTitle title={"신청한 건의글"} listLength={data.length} />
      <ProfilePendingListWrap>
        {data.map((item) => (
          <ProfileListItem data={item} />
        ))}
      </ProfilePendingListWrap>
    </ProfilePendingListContainer>
  );
};

export default ProfilePendingList;
