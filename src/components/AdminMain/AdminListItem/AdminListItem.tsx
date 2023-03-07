import { SuggestionPreview } from "../../../types/suggestion/suggestion.type";
import * as S from "./style";
import { HiCheck } from "@react-icons/all-files/hi/HiCheck";
import { CgClose } from "@react-icons/all-files/cg/CgClose";
import useSolveSuggestion from "../../../hooks/suggestion/useSolveSuggestion";
import useRefuseSuggestion from "../../../hooks/suggestion/useRefuseSuggestion";

interface Props {
  data: SuggestionPreview;
}

const AdminListItem = ({ data }: Props) => {
  const { solve } = useSolveSuggestion();
  const { refuse } = useRefuseSuggestion();

  return (
    <S.AdminListItemTr>
      <S.AdminListItemTd>{data.id}</S.AdminListItemTd>
      <S.AdminListItemTd
        style={{
          maxWidth: 832,
          textAlign: "start",
          overflow: "hidden",
          boxSizing: "border-box",
        }}
      >
        {data.title}
      </S.AdminListItemTd>
      <S.AdminListItemTd>{data.user.name}</S.AdminListItemTd>
      <S.AdminListItemTd>{`${data.user.grade}${data.user.room}${data.user.number}`}</S.AdminListItemTd>
      <S.AdminListItemTd style={{ whiteSpace: "nowrap" }}>
        {data.createAt}
      </S.AdminListItemTd>
      <S.AdminListItemTd>
        <S.AdminListItemAcceptWrap>
          <S.AdminListItemAcceptIcon
            isAccept={true}
            onClick={() => solve(data.id)}
          >
            <HiCheck />
          </S.AdminListItemAcceptIcon>
          <S.AdminListItemAcceptIcon
            isAccept={false}
            onClick={() => refuse(data.id)}
          >
            <CgClose />
          </S.AdminListItemAcceptIcon>
        </S.AdminListItemAcceptWrap>
      </S.AdminListItemTd>
    </S.AdminListItemTr>
  );
};

export default AdminListItem;
