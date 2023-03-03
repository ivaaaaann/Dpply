import { SuggestionComment } from "../../../../../types/suggestion/suggestion.type";
import {
  ReadCommentListItemTextRoot,
  ReadCommentListItemContainer,
  ReadCommentListItemProfileCreatedAt,
  ReadCommentListItemProfileImg,
  ReadCommentListItemProfileName,
  ReadCommentListItemProfileTextWrap,
  ReadCommentListItemProfileWrap,
  ReadCommentListItemTextWrap,
  ReadCommentListItemText,
} from "./style";
import Timecounting from "time-counting";

interface Props {
  comment: SuggestionComment;
  isLast: boolean;
}

const ReadCommentListItem = ({ comment, isLast }: Props) => {
  return (
    <ReadCommentListItemContainer>
      <ReadCommentListItemProfileWrap>
        <ReadCommentListItemProfileImg src={comment.user.profileImage} />
        <ReadCommentListItemProfileTextWrap>
          <ReadCommentListItemProfileName>
            {comment?.user.name}
          </ReadCommentListItemProfileName>
          <ReadCommentListItemProfileCreatedAt>
            {Timecounting(comment.createAt, { lang: "ko" })}
          </ReadCommentListItemProfileCreatedAt>
        </ReadCommentListItemProfileTextWrap>
      </ReadCommentListItemProfileWrap>
      <ReadCommentListItemTextWrap>
        <ReadCommentListItemTextRoot isLast={isLast} />
        <ReadCommentListItemText>{comment.comment}</ReadCommentListItemText>
      </ReadCommentListItemTextWrap>
    </ReadCommentListItemContainer>
  );
};

export default ReadCommentListItem;
