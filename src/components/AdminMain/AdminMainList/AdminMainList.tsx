import { SuggestionPreview } from "../../../types/suggestion/suggestion.type";
import {
  AdminMainListAcceptIcon,
  AdminMainListAcceptWrap,
  AdminMainListContainer,
  AdminMainListTbody,
  AdminMainListTd,
  AdminMainListTh,
  AdminMainListThead,
  AdminMainListTr,
} from "./style";
import { HiCheck } from "@react-icons/all-files/hi/HiCheck";
import { CgClose } from "@react-icons/all-files/cg/CgClose";

const TEST: SuggestionPreview[] = [];

const AdminMainList = () => {
  return (
    <AdminMainListContainer>
      <AdminMainListThead>
        <AdminMainListTr>
          <AdminMainListTh>번호</AdminMainListTh>
          <AdminMainListTh style={{ width: 832 }}>제목</AdminMainListTh>
          <AdminMainListTh>작성자</AdminMainListTh>
          <AdminMainListTh>학번</AdminMainListTh>
          <AdminMainListTh>작성일</AdminMainListTh>
          <AdminMainListTh></AdminMainListTh>
        </AdminMainListTr>
      </AdminMainListThead>
      <AdminMainListTbody>
        {TEST.map((item) => (
          <AdminMainListTr>
            <AdminMainListTd>{item.id}</AdminMainListTd>
            <AdminMainListTd style={{ width: 832, textAlign: "start" }}>
              {item.title}
            </AdminMainListTd>
            <AdminMainListTd>{item.user.name}</AdminMainListTd>
            <AdminMainListTd>1118</AdminMainListTd>
            <AdminMainListTd>{item.createAt}</AdminMainListTd>
            <AdminMainListTd>
              <AdminMainListAcceptWrap>
                <AdminMainListAcceptIcon isAccept={true}>
                  <HiCheck />
                </AdminMainListAcceptIcon>
                <AdminMainListAcceptIcon isAccept={false}>
                  <CgClose />
                </AdminMainListAcceptIcon>
              </AdminMainListAcceptWrap>
            </AdminMainListTd>
          </AdminMainListTr>
        ))}
      </AdminMainListTbody>
    </AdminMainListContainer>
  );
};

export default AdminMainList;
