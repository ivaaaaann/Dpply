import { useParams } from "react-router-dom";
import { useGetSuggestionCommentsQuery } from "../../../../quries/suggestion/suggestion.query";
import ReadCommentListItem from "./ReadCommentListItem/ReadCommentListItem";
import { ReadCommentListContainer } from "./style";

const ReadCommentList = () => {
  const { id } = useParams();

  const { data: serverCommentsData } = useGetSuggestionCommentsQuery({
    id: Number(id),
  });

  return (
    <ReadCommentListContainer>
      {serverCommentsData?.data.map((comment, idx, total) => (
        <ReadCommentListItem
          comment={comment}
          isLast={total.length - 1 === idx}
        />
      ))}
    </ReadCommentListContainer>
  );
};

export default ReadCommentList;
