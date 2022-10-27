import {
  AdminMainContainer,
  AdminMainTitle,
  AdminMainTitleIcon,
  AdminMainTitleWrap,
  AdminMainWrap,
} from "./style";
import { FaRegCommentAlt } from "@react-icons/all-files/fa/FaRegCommentAlt";
import AdminMainList from "./AdminMainList/AdminMainList";
import AdminMainListPagenation from "./AdminMainListPagenation/AdminMainListPagenation";

const AdminMain = () => {
  return (
    <AdminMainContainer>
      <AdminMainWrap>
        <AdminMainTitleWrap>
          <AdminMainTitleIcon>
            <FaRegCommentAlt />
          </AdminMainTitleIcon>
          <AdminMainTitle>신청된 건의사항</AdminMainTitle>
        </AdminMainTitleWrap>
        <AdminMainList />
        <AdminMainListPagenation />
      </AdminMainWrap>
    </AdminMainContainer>
  );
};

export default AdminMain;
