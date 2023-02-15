import styled from "@emotion/styled";
import { css } from "@emotion/react";


export const ContentsWrap = styled.div`
    width:1200px;
    margin:100px auto;
    box-shadow:0 4px 20px rgba(0, 0, 0, 0.2);
    padding:80px;
`;

export const ContentsTitle = styled.h1`
    font-size:36px;
    font-weight:700;
    text-align:center;
    padding-bottom:80px;
`;

export const Column = styled.div`
    padding-bottom:40px;
    display:flex;
    flex-direction:column;
    gap:16px;
`;

export const Row = styled.div`
    display:flex;
    ${({gap}) => {
        return css`
            gap: ${gap}px;
        `;
    }}
`;