import { ReactNode } from "react";
import { useLocation } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import { PageTemplateContainer, PageTemplateWrap } from "./style";

interface Props {
  children: ReactNode;
}

const PageTemplate = ({ children }: Props) => {
  const { pathname } = useLocation();

  const isNoneNavView = pathname === "/auth" || pathname === "/loading";

  return (
    <PageTemplateContainer>
      {!isNoneNavView && <NavBar />}
      <PageTemplateWrap isNoneNavView={isNoneNavView}>
        {children}
      </PageTemplateWrap>
    </PageTemplateContainer>
  );
};

export default PageTemplate;
