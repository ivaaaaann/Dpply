import { useNavigate } from "react-router-dom";
import { SuggestionPreview } from "../../../../types/suggestion/suggestion.type";
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
      <MainProfileItemImg src={data.image} />
      <MainProfileItemContentWrap>
        <MainProfileItemContentName>{data.name}</MainProfileItemContentName>
        <MainProfileItemContentTitle>{data.title}</MainProfileItemContentTitle>
        <MainProfileItemContentTagWrap>
          {data.tags.map((tag, idx) => (
            <MainProfileItemContentTagText key={idx}>
              {tag}
            </MainProfileItemContentTagText>
          ))}
        </MainProfileItemContentTagWrap>
      </MainProfileItemContentWrap>
      <MainProfileItemContentCreatedAt>
        {data.created_at}
      </MainProfileItemContentCreatedAt>
    </MainProfileItemContainer>
  );
};

export default MainProfileItem;
