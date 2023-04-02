import styled from "@emotion/styled";
import writeIcon from "../../../../../public/icon/write_icon.png"


export const Wrap = styled.div({
    padding: "8rem",
    display: "flex",
    justifyContent: "center",
});

export const ContentsWrap = styled.div({
    display: "flex",
    flexDirection: "column",
    maxWidth: "120rem",
    flex: "1 1 auto",
});

export const BoardPosts = styled.div({
    width: "100%",
    borderTop: "1px solid #000",
    borderBottom: "1px solid #000",
    textAlign: "center",
});

export const BoardPostsHeader = styled.div({
    fontWeight: "500",
});

export const Row = styled.div({
    display: "flex",
    borderTop: "1px solid #BDBDBD",
    padding: "1.2rem 0",
});

export const PostBasic = styled.div({
    width: "10%",
});

export const PostTitle = styled.div({
    width: "70%",
});

export const LinkPostTitle = styled.div({
    width: "70%",
    cursor: "pointer",
    
    ":hover": {
        color: "blue",
        textDecoration: "underline",
    },
});

export const BoardPostsBody = styled.div({
    color: "#4F4F4F",
});

export const ButtonBox = styled.div({
    display: "flex",
    justifyContent: "center",
    padding: "4rem 0",
});

export const NewBoardButton = styled.button({
    border: "1px solid #F2F2F2",
    borderRadius: "1rem",
    padding: "1.4rem 1.6rem",
    display: "flex",
    alignItems: "center",
    gap: ".8rem",
    fontWeight: "500",
    position: "absolute",
    right: "0",
    "::before": {
        display: "block",
        content: "''",
        width: "2.4rem",
        height: "2.4rem",
        background: `url('${writeIcon.src}') no-repeat center center / 1.7rem`,
    },
});