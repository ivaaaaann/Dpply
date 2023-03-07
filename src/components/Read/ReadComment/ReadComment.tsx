import { useGetMyMemberQuery } from "../../../quries/member/member.query";
import ReadCommentForm from "./ReadCommentForm/ReadCommentForm";
import ReadCommentList from "./ReadCommentList/ReadCommentList";
import { ReadCommentContainer } from "./style";

const ReadComment = () => {
  const { data: serverMyMemberData } = useGetMyMemberQuery();

  return (
    <ReadCommentContainer>
      {serverMyMemberData && <ReadCommentForm />}
      <ReadCommentList />
    </ReadCommentContainer>
  );
};

export default ReadComment;
