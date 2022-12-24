import {
  MainSectionText,
  MainSectionTextIcon,
  MainSectionTextWrap,
  MainSectionWrap,
} from "../style";
import { MainSuggestionBoxContainer, MainSuggestionBoxItemWrap } from "./style";
import { BsEnvelope } from "@react-icons/all-files/bs/BsEnvelope";
import { SuggestionPreview } from "../../../types/suggestion/suggestion.type";
import MainSuggestionItem from "./MainSuggestionItem/MainSuggestionItem";
import { useGetSuggestions } from "../../../quries/suggestion/suggestion.query";

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

const MainSuggestionBox = () => {
  const { data: serverSuggestionsData } = useGetSuggestions({
    type: "WAITING",
  });

  return (
    <MainSuggestionBoxContainer>
      <MainSectionWrap>
        <MainSectionTextWrap>
          <MainSectionTextIcon>
            <BsEnvelope />
          </MainSectionTextIcon>
          <MainSectionText>건의함</MainSectionText>
        </MainSectionTextWrap>
      </MainSectionWrap>
      <MainSuggestionBoxItemWrap>
        {serverSuggestionsData?.data.map((suggestion) => (
          <MainSuggestionItem data={suggestion} />
        ))}
      </MainSuggestionBoxItemWrap>
    </MainSuggestionBoxContainer>
  );
};

export default MainSuggestionBox;
