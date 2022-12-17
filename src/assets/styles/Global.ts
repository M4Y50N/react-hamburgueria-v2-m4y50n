import { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
    /* @font-face {
        font-family: "Insanibu";
        src: local("Insanibu"),
            url("../fonts/Insanibu.ttf") format("truetype");
        font-weight: normal;
        font-style: normal;
    } */


    :root{

        /* Color */
        --color-primary:#FF8233;
        --color-secondary: #D62300;
        --color-tertiary: #502314;

        --color-background: #F5EBDC;
        
        --color-gray-600: #333333;
        --color-gray-300: #828282;
        --color-gray-100: #E0E0E0;
        --color-gray-0: #F5F5F5;

        --color-negative: #E60000;
        --color-warning: #ffcd07;
        --color-success: #168821;
        --color-information: #155bcb;

        /* Font */
        --font-family: "Inter", sans-serif;

        --fz-heading-1: 2.6rem;
        --fz-heading-2: 2.2rem;
        --fz-heading-3: 1.8rem;

        --fz-headline: 1.6rem;

        --fz-body: 1.4rem;
        --fz-caption: 1.2rem;

        --fw-bold: 800;
        --fw-semibold: 600;
        --fw-regular: 400;
        
        font-size: 62.5%;

        /* Round */
        --radius: .7rem;
    }

    #root{
        height: 100%;
    }

    /* ScrollBar */
    /* width */
    ::-webkit-scrollbar {
        width: 10px;
    }
    /* Track */
    ::-webkit-scrollbar-track {
        background: var(--color-gray-0);
    }
    /* Handle */
    ::-webkit-scrollbar-thumb {
        background: var(--color-primary);
    }
    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
        background: var(--color-primary);
    }


`;
