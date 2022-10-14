import ReadCommentListItem from "./ReadCommentListItem/ReadCommentListItem";
import { ReadCommentListContainer } from "./style";

interface Props {
  data: string[];
}

const ReadCommentList = ({ data }: Props) => {
  return (
    <ReadCommentListContainer>
      {data.map((comment, idx) => (
        <ReadCommentListItem isLast={data.length - 1 === idx} />
      ))}
    </ReadCommentListContainer>
  );
};

export default ReadCommentList;
