import { createGlobalStyle } from "styled-components";

export const Reset = createGlobalStyle`
     * {
        margin:0;
        padding: 0;
        box-sizing: border-box;
    }
    body, html{
        width: 100vw;
        height: 100vh;
    }
    body {
        font-family: var(--font-family);
        font-size: var(--fz-body);
        background: var(--color-gray-0);
        color: var(--color-tertiary);
        -webkit-font-smoothing: antialiased;
        overflow-x: hidden;
    
    }
    
    
    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 500;
    }

    button{
        cursor: pointer;

        font-family: "FlameSans", sans-serif;

        border: none;
        background: transparent;
    }

    input{
        font-family: "FlameSans", sans-serif;
    }

    a{
        color: unset;
        text-decoration: none;

    }
    ul, ol, li{
        list-style: none;
    }
`;
