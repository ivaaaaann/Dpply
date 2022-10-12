import {
  MainSectionText,
  MainSectionTextIcon,
  MainSectionTextWrap,
  MainSectionWrap,
} from "../style";
import { MainProfileContainer, MainProfileItemWrap } from "./style";
import { BiUser } from "@react-icons/all-files/bi/BiUser";
import MainProfileHeader from "./MainProfileHeader/MainProfileHeader/MainProfileHeader";
import MainProfileTab from "./MainProfileTab/MainProfileTab";
import { SuggestionPreview } from "../../../types/suggestion/suggestion.type";
import MainProfileItem from "./MainProfileItem/MainProfileItem";

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
];

const MainProfile = () => {
  return (
    <MainProfileContainer>
      <MainSectionWrap>
        <MainSectionTextWrap>
          <MainSectionTextIcon>
            <BiUser />
          </MainSectionTextIcon>
          <MainSectionText>프로필</MainSectionText>
        </MainSectionTextWrap>
      </MainSectionWrap>
      <MainProfileHeader />
      <MainProfileTab />
      <MainProfileItemWrap>
        {TEST.map((item) => (
          <MainProfileItem data={item} key={item.id} />
        ))}
      </MainProfileItemWrap>
    </MainProfileContainer>
  );
};

export default MainProfile;
