import { useNavigate } from "react-router-dom";
import { SuggestionPreview } from "../../../../types/suggestion/suggestion.type";
import dataTransform from "../../../../utils/transform/dataTransform";
import {
  MainProfileItemContainer,
  MainProfileItemContentCreatedAt,
  MainProfileItemContentName,
  MainProfileItemContentTagText,
  MainProfileItemContentTagWrap,
  MainProfileItemContentTitle,
  MainProfileItemContentWrap,
  MainProfileItemImg,
} from "./style";

interface Props {
  data: SuggestionPreview;
}

const MainProfileItem = ({ data }: Props) => {
  const navigate = useNavigate();

  return (
    <MainProfileItemContainer onClick={() => navigate(`/read/${data.id}`)}>
      <MainProfileItemImg src={data.imageUrl} />
      <MainProfileItemContentWrap>
        <MainProfileItemContentName>
          {data.user.name}
        </MainProfileItemContentName>
        <MainProfileItemContentTitle>{data.title}</MainProfileItemContentTitle>
        <MainProfileItemContentTagWrap>
          <MainProfileItemContentTagText>
            #{dataTransform.tagTransform(data.tag)}
          </MainProfileItemContentTagText>
        </MainProfileItemContentTagWrap>
      </MainProfileItemContentWrap>
      <MainProfileItemContentCreatedAt>
        {data.createAt}
      </MainProfileItemContentCreatedAt>
    </MainProfileItemContainer>
  );
};

export default MainProfileItem;
