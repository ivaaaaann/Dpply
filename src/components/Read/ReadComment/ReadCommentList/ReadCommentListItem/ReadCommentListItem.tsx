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

interface Props {
  isLast: boolean;
}

const ReadCommentListItem = ({ isLast }: Props) => {
  return (
    <ReadCommentListItemContainer>
      <ReadCommentListItemProfileWrap>
        <ReadCommentListItemProfileImg />
        <ReadCommentListItemProfileTextWrap>
          <ReadCommentListItemProfileName>
            최희건
          </ReadCommentListItemProfileName>
          <ReadCommentListItemProfileCreatedAt>
            23분전
          </ReadCommentListItemProfileCreatedAt>
        </ReadCommentListItemProfileTextWrap>
      </ReadCommentListItemProfileWrap>
      <ReadCommentListItemTextWrap>
        <ReadCommentListItemTextRoot isLast={isLast} />
        <ReadCommentListItemText>
          매우매우 고쳐야한다고 생각을 합니다.
        </ReadCommentListItemText>
      </ReadCommentListItemTextWrap>
    </ReadCommentListItemContainer>
  );
};

export default ReadCommentListItem;
