import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`

    a  {
        text-decoration: none;
        color : ${({ theme }) => theme.contrast}
    }

    ${reset}

`;

export default GlobalStyle;
