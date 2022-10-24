import { SuggestionPreview } from "../../../types/suggestion/suggestion.type";
import {
  ProfileListItemContainer,
  ProfileListItemImg,
  ProfileListItemMiddleName,
  ProfileListItemMiddleTagWrap,
  ProfileListItemMiddleTitle,
  ProfileListItemMiddleWrap,
  ProfileListItemRightButton,
  ProfileListItemRightButtonWrap,
  ProfileListItemRightCreatedAt,
  ProfileListItemRightWrap,
  ProfileListItemTag,
} from "./style";

interface Props {
  data: SuggestionPreview;
}

const ProfileListItem = ({ data }: Props) => {
  return (
    <ProfileListItemContainer>
      <ProfileListItemImg src={data.image} />
      <ProfileListItemMiddleWrap>
        <ProfileListItemMiddleName>{data.name}</ProfileListItemMiddleName>
        <ProfileListItemMiddleTitle>{data.title}</ProfileListItemMiddleTitle>
        <ProfileListItemMiddleTagWrap>
          {data.tags.map((tag) => (
            <ProfileListItemTag>#{tag}</ProfileListItemTag>
          ))}
        </ProfileListItemMiddleTagWrap>
      </ProfileListItemMiddleWrap>
      <ProfileListItemRightWrap>
        <ProfileListItemRightButtonWrap>
          <ProfileListItemRightButton>수정</ProfileListItemRightButton>
          <div>|</div>
          <ProfileListItemRightButton>삭제</ProfileListItemRightButton>
        </ProfileListItemRightButtonWrap>
        <ProfileListItemRightCreatedAt>
          {data.created_at}
        </ProfileListItemRightCreatedAt>
      </ProfileListItemRightWrap>
    </ProfileListItemContainer>
  );
};

export default ProfileListItem;
