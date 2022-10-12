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
];

const MainSuggestionBox = () => {
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
        {TEST.map((suggestion) => (
          <MainSuggestionItem data={suggestion} />
        ))}
      </MainSuggestionBoxItemWrap>
    </MainSuggestionBoxContainer>
  );
};

export default MainSuggestionBox;
