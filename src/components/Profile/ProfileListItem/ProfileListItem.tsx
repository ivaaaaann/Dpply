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
      <ProfileListItemImg src={data.imageUrl} />
      <ProfileListItemMiddleWrap>
        <ProfileListItemMiddleName>{data.user.name}</ProfileListItemMiddleName>
        <ProfileListItemMiddleTitle>{data.title}</ProfileListItemMiddleTitle>
        <ProfileListItemMiddleTagWrap>
          {data.tag.map((tag) => (
            <ProfileListItemTag>
              #{dataTransform.tagTransform(tag)}
            </ProfileListItemTag>
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
          {data.createAt}
        </ProfileListItemRightCreatedAt>
      </ProfileListItemRightWrap>
    </ProfileListItemContainer>
  );
};

export default ProfileListItem;
