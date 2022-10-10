import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`

    a  {
        text-decoration: none;
    }

    ${reset}

`;

export default GlobalStyle;
