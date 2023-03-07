import {
  AdminMainListContainer,
  AdminMainListTbody,
  AdminMainListTh,
  AdminMainListThead,
  AdminMainListTr,
} from "./style";
import { useGetSuggestionsByPage } from "../../../quries/suggestion/suggestion.query";
import AdminListItem from "../AdminListItem/AdminListItem";
import { useRecoilState } from "recoil";
import { adminPageAtom } from "../../../store/admin/admin.store";

const AdminMainList = () => {
  const [page, setPage] = useRecoilState(adminPageAtom);

  const { data: serverSuggestionsData } = useGetSuggestionsByPage({
    page: page,
  });

  return (
    <AdminMainListContainer>
      <AdminMainListThead>
        <AdminMainListTr>
          <AdminMainListTh>번호</AdminMainListTh>
          <AdminMainListTh style={{ minWidth: 832, maxWidth: 832 }}>
            제목
          </AdminMainListTh>
          <AdminMainListTh>작성자</AdminMainListTh>
          <AdminMainListTh>학번</AdminMainListTh>
          <AdminMainListTh>작성일</AdminMainListTh>
          <AdminMainListTh></AdminMainListTh>
        </AdminMainListTr>
      </AdminMainListThead>
      <AdminMainListTbody>
        {serverSuggestionsData?.data.posting.map((item) => (
          <AdminListItem data={item} key={item.id} />
        ))}
      </AdminMainListTbody>
    </AdminMainListContainer>
  );
};

export default AdminMainList;
