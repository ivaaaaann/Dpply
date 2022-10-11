import { Suggestion } from "../../../../types/suggestion/suggestion.type";
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
  data: Suggestion;
}

const MainProfileItem = ({ data }: Props) => {
  return (
    <MainProfileItemContainer>
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
