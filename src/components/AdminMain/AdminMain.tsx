import {
  AdminMainContainer,
  AdminMainTitle,
  AdminMainTitleIcon,
  AdminMainTitleWrap,
  AdminMainWrap,
  SelectTagWrap,
} from "./style";
import { FaRegCommentAlt } from "@react-icons/all-files/fa/FaRegCommentAlt";
import AdminMainList from "./AdminMainList/AdminMainList";
import AdminMainListPagenation from "./AdminMainListPagenation/AdminMainListPagenation";
import AdminDropDown from "./AdminDropDown/AdminDropDown";
import useFilterSuggestion from "../../hooks/suggestion/useFilterSuggestion";

const AdminMain = () => {
  return (
    <AdminMainContainer>
      <AdminMainWrap>
        <AdminMainTitleWrap>
          <AdminMainTitleIcon>
            <FaRegCommentAlt />
          </AdminMainTitleIcon>
          <AdminMainTitle>신청된 건의사항</AdminMainTitle>
          <AdminDropDown />
        </AdminMainTitleWrap>
        <AdminMainList />
        <AdminMainListPagenation />
      </AdminMainWrap>
    </AdminMainContainer>
  );
};

export default AdminMain;
