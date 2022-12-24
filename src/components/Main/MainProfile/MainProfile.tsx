import {
  MainSectionText,
  MainSectionTextIcon,
  MainSectionTextWrap,
  MainSectionWrap,
} from "../style";
import { MainProfileContainer, MainProfileItemWrap } from "./style";
import { BiUser } from "@react-icons/all-files/bi/BiUser";
import MainProfileHeader from "./MainProfileHeader/MainProfileHeader/MainProfileHeader";
import MainProfileTab from "./MainProfileTab/MainProfileTab";
import { SuggestionStatus } from "../../../types/suggestion/suggestion.type";
import MainProfileItem from "./MainProfileItem/MainProfileItem";
import { useGetMySuggestion } from "../../../quries/suggestion/suggestion.query";
import { useRecoilValue } from "recoil";
import { mainProfileTabAtom } from "../../../store/main/main.store";

const MainProfile = () => {
  const tab = useRecoilValue(mainProfileTabAtom);

  const { data: serverSuggestionsData } = useGetMySuggestion({
    type: tab as SuggestionStatus,
  });

  return (
    <MainProfileContainer>
      <MainSectionWrap>
        <MainSectionTextWrap>
          <MainSectionTextIcon>
            <BiUser />
          </MainSectionTextIcon>
          <MainSectionText>프로필</MainSectionText>
        </MainSectionTextWrap>
      </MainSectionWrap>
      <MainProfileHeader />
      <MainProfileTab />
      <MainProfileItemWrap>
        {serverSuggestionsData?.data.map((item) => (
          <MainProfileItem data={item} key={item.id} />
        ))}
      </MainProfileItemWrap>
    </MainProfileContainer>
  );
};

export default MainProfile;
