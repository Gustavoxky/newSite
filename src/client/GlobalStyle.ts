import { createGlobalStyle } from "styled-components";

interface IGlobalThemeProps {
    theme: {
        body?: string;
    }
    
}

export const GlobalStyle = createGlobalStyle<IGlobalThemeProps>`
    body {
        margin: 0;
        background-color: ${props => props.theme.body};
    }
`