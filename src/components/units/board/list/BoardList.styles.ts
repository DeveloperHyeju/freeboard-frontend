import styled from "@emotion/styled";


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

export const BoardList = styled.div({
    width: "100%",
    borderTop: "1px solid #000",
    borderBottom: "1px solid #000",
    textAlign: "center",
});

export const BoardListHeader = styled.div({
    fontWeight: "500",
});

export const Row = styled.div({
    display: "flex",
    borderTop: "1px solid #BDBDBD",
    padding: "1.2rem 0",
});

export const BoardListItemBasic = styled.div({
    width: "10%",
});

export const BoarListItemTitle = styled.div({
    width: "70%",
});

export const BoardListItemLinkTitle = styled.div({
    width: "70%",
    cursor: "pointer",
    
    ":hover": {
        color: "blue",
        textDecoration: "underline",
    },
});

export const BoardListBody = styled.div({
    color: "#4F4F4F",
});

export const ButtonBox = styled.div({
    display: "flex",
    justifyContent: "center",
    padding: "4rem 0",
});

export const CreateBoardButton = styled.button({
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
        background: "url('/icon/write_icon.png') no-repeat center center / 1.7rem",
    },
});