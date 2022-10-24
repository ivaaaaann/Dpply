import { SuggestionPreview } from "../../types/suggestion/suggestion.type";
import ProfileApproveList from "./ProfileApproveList/ProfileApproveList";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import ProfilePendingList from "./ProfilePendingList/ProfilePendingList";
import { ProfileContainer, ProfileWrap } from "./style";

const TEST: SuggestionPreview[] = [
  {
    id: 0,
    image: "",
    name: "최희건",
    title: "이거 고쳐주세요",
    created_at: "2022.09.28",
    tags: ["기숙사", "학교"],
  },
  {
    id: 2,
    image: "",
    name: "최희건",
    title: "이거 고쳐주세요",
    created_at: "2022.09.28",
    tags: ["기숙사", "학교"],
  },
  {
    id: 3,
    image: "",
    name: "최희건",
    title: "이거 고쳐주세요",
    created_at: "2022.09.28",
    tags: ["기숙사", "학교"],
  },
  {
    id: 4,
    image: "",
    name: "최희건",
    title: "이거 고쳐주세요",
    created_at: "2022.09.28",
    tags: ["기숙사", "학교"],
  },
  {
    id: 5,
    image: "",
    name: "최희건",
    title: "이거 고쳐주세요",
    created_at: "2022.09.28",
    tags: ["기숙사", "학교"],
  },
  {
    id: 6,
    image: "",
    name: "최희건",
    title: "이거 고쳐주세요",
    created_at: "2022.09.28",
    tags: ["기숙사", "학교"],
  },
  {
    id: 7,
    image: "",
    name: "최희건",
    title: "이거 고쳐주세요",
    created_at: "2022.09.28",
    tags: ["기숙사", "학교"],
  },
];

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
