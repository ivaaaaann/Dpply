import { useRecoilState } from "recoil";
import { MAIN_PROFILE_TAB_ITEM } from "../../../../constants/main/main.constant";
import { mainProfileTabAtom } from "../../../../store/main/main.store";
import { MainProfileTabContainer, MainProfileTabItem } from "./style";

const MainProfileTab = () => {
  const [tab, setTab] = useRecoilState(mainProfileTabAtom);
  return (
    <MainProfileTabContainer>
      {MAIN_PROFILE_TAB_ITEM.map((item) => (
        <MainProfileTabItem
          isSelect={item.key === tab}
          onClick={() => setTab(item.key)}
        >
          {item.title}
        </MainProfileTabItem>
      ))}
    </MainProfileTabContainer>
  );
};

export default MainProfileTab;
