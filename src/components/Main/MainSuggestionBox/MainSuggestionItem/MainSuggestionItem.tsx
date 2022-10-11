import { Suggestion } from "../../../../types/suggestion/suggestion.type";
import {
  MainSuggestionItemContainer,
  MainSuggestionItemContentName,
  MainSuggestionItemContentTagText,
  MainSuggestionItemContentTagWrap,
  MainSuggestionItemContentTitle,
  MainSuggestionItemContentWrap,
  MainSuggestionItemCreatedAt,
  MainSuggestionItemImg,
} from "./style";

interface Props {
  data: Suggestion;
}

const MainSuggestionItem = ({ data }: Props) => {
  return (
    <MainSuggestionItemContainer>
      <MainSuggestionItemImg />
      <MainSuggestionItemContentWrap>
        <MainSuggestionItemContentName>익명</MainSuggestionItemContentName>
        <MainSuggestionItemContentTitle>
          {data.title}
        </MainSuggestionItemContentTitle>
        <MainSuggestionItemContentTagWrap>
          {data.tags.map((tag, idx) => (
            <MainSuggestionItemContentTagText key={idx}>
              #{tag}
            </MainSuggestionItemContentTagText>
          ))}
        </MainSuggestionItemContentTagWrap>
      </MainSuggestionItemContentWrap>
      <MainSuggestionItemCreatedAt>
        {data.created_at}
      </MainSuggestionItemCreatedAt>
    </MainSuggestionItemContainer>
  );
};

export default MainSuggestionItem;
