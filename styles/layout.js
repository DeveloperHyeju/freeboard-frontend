import styled from "@emotion/styled";
import { Common } from "./common";


export const ContentsWrap = styled.div({
    width: '1200px',
    margin: '10rem auto',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
    padding: '6rem'
});

export const ContentsTitle = styled.h1({
    fontSize: Common.fontSize.fs36,
    fontWeight: Common.fontWeight.fw700,
    textAlign: 'center',
});

export const Contents = styled.div({
    display: 'flex',
    flexDirection: 'column',
    gap: '4rem',
    padding: '10rem 0'
});

export const Column = styled.div({
    display: 'flex',
    flexDirection: 'column',
    gap: '1.6rem'
});

export const Row = styled.div({
    display: 'flex'
}, ({gap, pattern}) => {
    switch (pattern) {
        case "stretch":
            return {
                gap: `${gap}rem`,
                '& div': {
                    flexGrow: '1',
                }
            };
        case "normal":
            return {
                gap: `${gap}rem`,
                '& div': {
                    flexGrow: '0',
                }
            };
        default:
            return {
                gap: `${gap}rem`,
                '& div': {
                    flexGrow: '0',
                }
            };
    }
});

export const ButtonBox = styled.div({
    display: 'flex'
}, ({gap, align}) => {
    switch (align) {
        case "start":
            return {
                gap: `${gap}rem`,
                justifyContent: 'flex-start'
            };
        case "center":
            return {
                gap:`${gap}rem`,
                justifyContent: 'center'
            };
        case "end":
            return {
                gap:`${gap}rem`,
                justifyContent: 'flex-end'
            };
        default:
            return {
                gap:`${gap}rem`,
                justifyContent: 'center'
            }
    }
});