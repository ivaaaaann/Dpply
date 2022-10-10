import { ReactNode } from "react";
import { useLocation } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import { PageTemplateContainer, PageTemplateWrap } from "./style";

interface Props {
  children: ReactNode;
}

const PageTemplate = ({ children }: Props) => {
  const { pathname } = useLocation();

  return (
    <PageTemplateContainer>
      {!(pathname === "/auth" || pathname === "/loading") && <NavBar />}
      <PageTemplateWrap>{children}</PageTemplateWrap>
    </PageTemplateContainer>
  );
};

export default PageTemplate;
