import { FaLocationArrow } from "@react-icons/all-files/fa/FaLocationArrow";
import { useParams } from "react-router-dom";
import usePostComment from "../../../../hooks/suggestion/usePostComment";
import { useGetMyMemberQuery } from "../../../../quries/member/member.query";
import {
  ReadCommentFormContainer,
  ReadCommentFormInput,
  ReadCommentFormInputButton,
  ReadCommentFormInputWrap,
  ReadCommentFormProfileImg,
} from "./style";

const ReadCommentForm = () => {
  const { id } = useParams();

  const { data: serverMyMemberData } = useGetMyMemberQuery();

  const { comment, onChangeComment, onSubmitComment } = usePostComment({
    id: Number(id),
  });

  return (
    <ReadCommentFormContainer>
      <ReadCommentFormProfileImg src={serverMyMemberData?.data.profileImage} />
      <ReadCommentFormInputWrap onSubmit={onSubmitComment}>
        <ReadCommentFormInput
          placeholder="댓글을 입력하세요"
          value={comment}
          onChange={onChangeComment}
        />
        <ReadCommentFormInputButton type="button">
          <FaLocationArrow />
        </ReadCommentFormInputButton>
      </ReadCommentFormInputWrap>
    </ReadCommentFormContainer>
  );
};

export default ReadCommentForm;
