import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { gray4 } from "../colors";


const base = css`
    width: 100%;
    padding:16px 14px;
    border: 1px solid ${gray4};
    & ::placeholder {
        color: ${gray4};
    }
`;

export const Input = styled.input`
    ${base};
    ${({width}) => {
        return css`
            width: ${width};
        `;
    }};
`;

export const TitleLabel = styled.label`
    font-weight:500;
    display:inline-block;
`;

export const Textarea = styled.textarea`
    ${base};
    ${({height}) => {
        return css`
            height: ${height}px;
        `;
    }};
`;