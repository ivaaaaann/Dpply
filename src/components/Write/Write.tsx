import {
  WriteContainer,
  WriteTitle,
  WriteTitleIcon,
  WriteTitleWrap,
  WriteWrap,
} from "./style";
import { FaPen } from "@react-icons/all-files/fa/FaPen";
import WriteForm from "./WriteForm/WriteForm";

const Write = () => {
  return (
    <WriteContainer>
      <WriteWrap>
        <WriteTitleWrap>
          <WriteTitleIcon>
            <FaPen />
          </WriteTitleIcon>
          <WriteTitle>글쓰기</WriteTitle>
        </WriteTitleWrap>
        <WriteForm />
      </WriteWrap>
    </WriteContainer>
  );
};

export default Write;
