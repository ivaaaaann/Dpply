import {
  AdminMainListContainer,
  AdminMainListTbody,
  AdminMainListTh,
  AdminMainListThead,
  AdminMainListTr,
} from "./style";
import AdminListItem from "../AdminListItem/AdminListItem";
import useFilterSuggestion from "../../../hooks/suggestion/useFilterSuggestion";

const AdminMainList = () => {
  const { suggestion } = useFilterSuggestion();

  return (
    <AdminMainListContainer>
      <AdminMainListThead>
        <AdminMainListTr>
          <AdminMainListTh>번호</AdminMainListTh>
          <AdminMainListTh style={{ minWidth: 500, maxWidth: 500 }}>
            제목
          </AdminMainListTh>
          <AdminMainListTh>작성자</AdminMainListTh>
          <AdminMainListTh>학번</AdminMainListTh>
          <AdminMainListTh>작성일</AdminMainListTh>
          <AdminMainListTh></AdminMainListTh>
        </AdminMainListTr>
      </AdminMainListThead>
      <AdminMainListTbody>
        {suggestion?.map((item) => (
          <AdminListItem data={item} key={item.id} />
        ))}
      </AdminMainListTbody>
    </AdminMainListContainer>
  );
};

export default AdminMainList;
