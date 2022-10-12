import { Suggestion } from "../../types/suggestion/suggestion.type";
import ReadHeader from "./ReadHeader/ReadHeader";
import { ReadContainer, ReadWrap } from "./style";

interface Props {
  data: Suggestion;
}

const Read = ({ data }: Props) => {
  return (
    <ReadContainer>
      <ReadWrap>
        <ReadHeader data={data} />
      </ReadWrap>
    </ReadContainer>
  );
};

export default Read;
