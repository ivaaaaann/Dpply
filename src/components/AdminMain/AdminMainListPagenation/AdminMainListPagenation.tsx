import { useRecoilState } from "recoil";
import { usePagenationSuggestion } from "../../../hooks/suggestion/usePagenationSuggestion";
import {
  adminPageAtom,
  adminPageHasMoreAtom,
} from "../../../store/admin/admin.store";
import * as S from "./style";
import { BsFillTriangleFill } from "@react-icons/all-files/bs/BsFillTriangleFill";

const AdminMainListPagenation = () => {
  const [, setHasMore] = useRecoilState(adminPageHasMoreAtom);
  const [page, setPage] = useRecoilState(adminPageAtom);

  const { totalPage, increasePage, decreasePage } = usePagenationSuggestion();

  return (
    <S.AdminMainListPagenationContainer>
      <S.SideButton direction="left" onClick={decreasePage}>
        <BsFillTriangleFill />
      </S.SideButton>
      <S.PageNumberWrap>
        <S.PageNumber>{page}</S.PageNumber>
      </S.PageNumberWrap>
      <S.SideButton direction="right" onClick={increasePage}>
        <BsFillTriangleFill />
      </S.SideButton>
    </S.AdminMainListPagenationContainer>
  );
};

export default AdminMainListPagenation;
