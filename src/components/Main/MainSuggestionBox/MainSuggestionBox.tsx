import {
  MainSectionText,
  MainSectionTextIcon,
  MainSectionTextWrap,
  MainSectionWrap,
} from "../style";
import { MainSuggestionBoxContainer, MainSuggestionBoxItemWrap } from "./style";
import { BsEnvelope } from "@react-icons/all-files/bs/BsEnvelope";
import MainSuggestionItem from "./MainSuggestionItem/MainSuggestionItem";
import { useGetSuggestionsQuery } from "../../../quries/suggestion/suggestion.query";

const MainSuggestionBox = () => {
  const { data: serverSuggestionsData } = useGetSuggestionsQuery({
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
