import ReadCommentForm from "./ReadCommentForm/ReadCommentForm";
import ReadCommentList from "./ReadCommentList/ReadCommentList";
import { ReadCommentContainer } from "./style";

interface Props {
  data: string[];
}

const ReadComment = ({ data }: Props) => {
  return (
    <ReadCommentContainer>
      <ReadCommentForm />
      <ReadCommentList data={data} />
    </ReadCommentContainer>
  );
};

export default ReadComment;
