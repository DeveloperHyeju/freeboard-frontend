import styled from "@emotion/styled";
import { Common } from "./Common";

const base = styled.button({
    fontWeight: Common.fontWeight.fw500
}, ({size}) => {
    switch (size) {
        case "m":
            return {
                padding: `1.4rem 1.6rem`
            };
        case "lg":
            return {
                padding: `1.4rem 6rem`
            };
        default:
            return {
                padding: `1.4rem 1.6rem`
            };
    }
});

export const Button = styled(base)(({color}) => {
    switch (color) {
        case "brand":
            return {
                backgroundColor: Common.colors.brand
            };
        case "black":
            return {
                backgroundColor: Common.colors.black,
                color: Common.colors.white
            };
        case "grary":
            return {
                backgroundColor: Common.colors.gray4
            };
        default:
            return {
                backgroundColor: Common.colors.brand
            };
    }
});

export const OutlineButton = styled(base)({
    backgroundColor: 'transparent',
    border: `1px solid ${Common.colors.gray4}`
});