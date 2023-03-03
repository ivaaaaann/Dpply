import { SuggestionDetail } from "../../types/suggestion/suggestion.type";
import ReadComment from "./ReadComment/ReadComment";
import ReadHeader from "./ReadHeader/ReadHeader";
import { ReadContainer, ReadWrap } from "./style";

const Read = () => {
  return (
    <ReadContainer>
      <ReadWrap>
        <ReadHeader />
        <ReadComment />
      </ReadWrap>
    </ReadContainer>
  );
};

export default Read;
