import { SuggestionDetail } from "../../types/suggestion/suggestion.type";
import ReadComment from "./ReadComment/ReadComment";
import ReadHeader from "./ReadHeader/ReadHeader";
import { ReadContainer, ReadWrap } from "./style";

interface Props {
  data: SuggestionDetail;
}

const Read = ({ data }: Props) => {
  return (
    <ReadContainer>
      <ReadWrap>
        <ReadHeader data={data} />
        <ReadComment data={["asdasd", "sdadda", "Adsd"]} />
      </ReadWrap>
    </ReadContainer>
  );
};

export default Read;
