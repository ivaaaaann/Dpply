import MainProfile from "./MainProfile/MainProfile";
import MainSuggestionBox from "./MainSuggestionBox/MainSuggestionBox";
import {
  MainBannerDescription,
  MainBannerTextWrap,
  MainBannerTitle,
  MainBannerWrap,
  MainContainer,
  MainWrap,
} from "./style";

const Main = () => {
  return (
    <MainContainer>
      <MainBannerWrap>
        <MainBannerTextWrap>
          <MainBannerDescription>
            학생의 모든 소리를 들어주는
          </MainBannerDescription>
          <MainBannerTitle>소곤소곤</MainBannerTitle>
        </MainBannerTextWrap>
      </MainBannerWrap>
      <MainWrap>
        <MainSuggestionBox />
        <MainProfile />
      </MainWrap>
    </MainContainer>
  );
};

export default Main;
