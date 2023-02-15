import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { black, white, brand, gray4 } from "../colors";

const base = styled.button`
    ${({size}) => {
        switch (size) {
            case "m":
                return css`
                    padding: 14px 16px;
                `;
            case "lg":
                return css`
                    padding: 14px 60px;
                `;
            default:
                return css`
                    padding: 14px 16px;
                `;
        }
    }};
`;

export const Button = styled(base)`
    ${({color}) => {
        switch (color) {
            case "brand":
                return css`
                    background-color: ${brand};
                `;
            case "black":
                return css`
                    background-color: ${black};
                    color: ${white};
                `;
            case "grary":
                return css`
                    background-color: ${gray4};
                `;
            default:
                return css`
                    background-color: ${brand};
                `;
        }
    }};
`;

export const OutlineButton = styled(base)`
    background-color: transparent;
    border:1px solid ${gray4};
`;