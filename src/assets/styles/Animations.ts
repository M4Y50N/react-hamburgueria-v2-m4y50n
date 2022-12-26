import { keyframes } from "styled-components";

export const leftAppear = keyframes`
    0% {
        opacity: 0;
        transform: translateX(-10px);
    }
    100% {
        opacity: 1;
        transform: translateX(0);
    }
`;
