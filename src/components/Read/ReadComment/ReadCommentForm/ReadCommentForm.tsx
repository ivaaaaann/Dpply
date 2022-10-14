import { FaLocationArrow } from "@react-icons/all-files/fa/FaLocationArrow";
import {
  ReadCommentFormContainer,
  ReadCommentFormInput,
  ReadCommentFormInputButton,
  ReadCommentFormInputWrap,
  ReadCommentFormProfileImg,
} from "./style";

const ReadCommentForm = () => {
  return (
    <ReadCommentFormContainer>
      <ReadCommentFormProfileImg />
      <ReadCommentFormInputWrap>
        <ReadCommentFormInput />
        <ReadCommentFormInputButton>
          <FaLocationArrow />
        </ReadCommentFormInputButton>
      </ReadCommentFormInputWrap>
    </ReadCommentFormContainer>
  );
};

export default ReadCommentForm;
