import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const PageTemplate = ({ children }: Props) => {
  return <div>{children}</div>;
};

export default PageTemplate;
