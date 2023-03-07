import { useNavigate } from "react-router-dom";
import useRemoveSuggestion from "../../../hooks/suggestion/useRemoveSuggestion";
import { SuggestionPreview } from "../../../types/suggestion/suggestion.type";
import dataTransform from "../../../utils/transform/dataTransform";
import {
  ProfileListItemContainer,
  ProfileListItemImg,
  ProfileListItemMiddleName,
  ProfileListItemMiddleTagWrap,
  ProfileListItemMiddleTitle,
  ProfileListItemMiddleWrap,
  ProfileListItemRightButton,
  ProfileListItemRightCreatedAt,
  ProfileListItemRightWrap,
  ProfileListItemTag,
} from "./style";

interface Props {
  data: SuggestionPreview;
}

const ProfileListItem = ({ data }: Props) => {
  const navigate = useNavigate();
  const { onRemove } = useRemoveSuggestion();

  return (
    <ProfileListItemContainer onClick={() => navigate(`/read/${data.id}`)}>
      <ProfileListItemImg src={data.imageUrl} />
      <ProfileListItemMiddleWrap>
        <ProfileListItemMiddleName>{data.user.name}</ProfileListItemMiddleName>
        <ProfileListItemMiddleTitle>{data.title}</ProfileListItemMiddleTitle>
        <ProfileListItemMiddleTagWrap>
          <ProfileListItemTag>
            #{dataTransform.tagTransformToKorean(data.tag)}
          </ProfileListItemTag>
        </ProfileListItemMiddleTagWrap>
      </ProfileListItemMiddleWrap>
      <ProfileListItemRightWrap>
        <ProfileListItemRightButton onClick={() => onRemove(data.id)}>
          삭제
        </ProfileListItemRightButton>
        <ProfileListItemRightCreatedAt>
          {data.createAt}
        </ProfileListItemRightCreatedAt>
      </ProfileListItemRightWrap>
    </ProfileListItemContainer>
  );
};

export default ProfileListItem;
