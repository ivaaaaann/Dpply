import { useNavigate } from "react-router-dom";
import { SuggestionPreview } from "../../../../types/suggestion/suggestion.type";
import dataTransform from "../../../../utils/transform/dataTransform";
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
  data: SuggestionPreview;
}

const MainSuggestionItem = ({ data }: Props) => {
  const navigate = useNavigate();

  return (
    <MainSuggestionItemContainer onClick={() => navigate(`/read/${data.id}`)}>
      <MainSuggestionItemImg src={data.imageUrl} />
      <MainSuggestionItemContentWrap>
        <MainSuggestionItemContentName>
          {data.user.name}
        </MainSuggestionItemContentName>
        <MainSuggestionItemContentTitle>
          {data.title}
        </MainSuggestionItemContentTitle>
        <MainSuggestionItemContentTagWrap>
          <MainSuggestionItemContentTagText>
            #{dataTransform.tagTransformToKorean(data.tag)}
          </MainSuggestionItemContentTagText>
        </MainSuggestionItemContentTagWrap>
      </MainSuggestionItemContentWrap>
      <MainSuggestionItemCreatedAt>{data.createAt}</MainSuggestionItemCreatedAt>
    </MainSuggestionItemContainer>
  );
};

export default MainSuggestionItem;
