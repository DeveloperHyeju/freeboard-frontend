import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { Common } from "./Common";


const base = css({
    width: '100%',
    padding: '16px 14px',
    border: `1px solid ${Common.colors.gray4}`,
    '& ::placeholder': {
        color: Common.colors.gray4
    }
});

export const Input = styled.input(base, ({width}) => {
    return {
        width: `${width}rem`
    };
});

export const TitleLabel = styled.label({
    fontWeight: Common.fontWeight.fw500,
    display: 'inline-block'
});

export const Textarea = styled.textarea(base, ({height}) => {
    return {
        height: `${height}px`
    };
});

export const RadioBox = styled.div({
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    '& input[type="radio"]' : {
        accentColor: Common.colors.brand
    }
});