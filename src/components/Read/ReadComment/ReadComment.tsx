import ReadCommentForm from "./ReadCommentForm/ReadCommentForm";
import ReadCommentList from "./ReadCommentList/ReadCommentList";
import { ReadCommentContainer } from "./style";

const ReadComment = () => {
  return (
    <ReadCommentContainer>
      <ReadCommentForm />
      <ReadCommentList />
    </ReadCommentContainer>
  );
};

export default ReadComment;
