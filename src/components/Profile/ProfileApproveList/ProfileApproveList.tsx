import { SuggestionPreview } from "../../../types/suggestion/suggestion.type";
import ProfileListItem from "../ProfileListItem/ProfileListItem";
import ProfileSectionTitle from "../ProfileSectionTitle/ProfileSectionTitle";
import { ProfileApprovalListContainer, ProfileApprovalListWrap } from "./style";

interface Props {
  data: SuggestionPreview[];
}

const ProfileApproveList = ({ data }: Props) => {
  return (
    <ProfileApprovalListContainer>
      <ProfileSectionTitle title={"승인된 건의글"} listLength={data.length} />
      <ProfileApprovalListWrap>
        {data.map((item) => (
          <ProfileListItem data={item} />
        ))}
      </ProfileApprovalListWrap>
    </ProfileApprovalListContainer>
  );
};

export default ProfileApproveList;
