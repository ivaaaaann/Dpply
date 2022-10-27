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
    imageUrl: "",
    user: {
      email: "ldh165163@gmail.com",
      grade: 1,
      name: "임동현",
      number: 2,
      profileImage: "",
      role: "STUDENT",
      room: 1,
      uniqueId: "1",
    },
    title: "이거 고쳐주세요",
    createAt: "2022.09.28",
    tag: ["SCHOOL"],
  },
  {
    id: 2,
    imageUrl: "",
    user: {
      email: "ldh165163@gmail.com",
      grade: 1,
      name: "임동현",
      number: 2,
      profileImage: "",
      role: "STUDENT",
      room: 1,
      uniqueId: "1",
    },
    title: "이거 고쳐주세요",
    createAt: "2022.09.28",
    tag: ["SCHOOL"],
  },
  {
    id: 3,
    imageUrl: "",
    user: {
      email: "ldh165163@gmail.com",
      grade: 1,
      name: "임동현",
      number: 2,
      profileImage: "",
      role: "STUDENT",
      room: 1,
      uniqueId: "1",
    },
    title: "이거 고쳐주세요",
    createAt: "2022.09.28",
    tag: ["SCHOOL"],
  },
  {
    id: 4,
    imageUrl: "",
    user: {
      email: "ldh165163@gmail.com",
      grade: 1,
      name: "임동현",
      number: 2,
      profileImage: "",
      role: "STUDENT",
      room: 1,
      uniqueId: "1",
    },
    title: "이거 고쳐주세요",
    createAt: "2022.09.28",
    tag: ["SCHOOL"],
  },
  {
    id: 5,
    imageUrl: "",
    user: {
      email: "ldh165163@gmail.com",
      grade: 1,
      name: "임동현",
      number: 2,
      profileImage: "",
      role: "STUDENT",
      room: 1,
      uniqueId: "1",
    },
    title: "이거 고쳐주세요",
    createAt: "2022.09.28",
    tag: ["SCHOOL"],
  },
  {
    id: 6,
    imageUrl: "",
    user: {
      email: "ldh165163@gmail.com",
      grade: 1,
      name: "임동현",
      number: 2,
      profileImage: "",
      role: "STUDENT",
      room: 1,
      uniqueId: "1",
    },
    title: "이거 고쳐주세요",
    createAt: "2022.09.28",
    tag: ["SCHOOL"],
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
