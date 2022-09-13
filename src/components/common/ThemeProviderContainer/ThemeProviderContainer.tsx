import { ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../../../styles/globalStyle";
import { lightTheme } from "../../../styles/theme";

interface Props {
  children: ReactNode;
}

const ThemeProviderContainer = ({ children }: Props) => {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};

export default ThemeProviderContainer;
