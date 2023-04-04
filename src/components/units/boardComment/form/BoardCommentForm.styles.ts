import styled from "@emotion/styled";
import { IEditProps } from "./BoardCommentForm.types";


export const Wrap = styled.div({
    width: "100%",
});

export const Info = styled.div({
    display: "flex",
    gap: "2.4rem",
    alignItems: "center",
}, ({isEdit}: IEditProps) => ({
    paddingTop: isEdit ? "2rem" : "0",
}));

export const InfoInput = styled.input({
    border: "1px solid #BDBDBD",
    padding: "1.4rem 2rem",
    width: "16rem",
    "::placeholder": {
        fontWeight: "500",
        color: "#828282",
    }
});

export const StarBox = styled.div({
    display: "flex",
    alignItems: "center",
});

export const Contents = styled.div({
    border: "1px solid #BDBDBD",
    display: "flex",
    flexDirection: "column",
    margin: "2rem 0",
});

export const ContentsInput = styled.textarea({
    width: "100%",
    borderBottom: "1px solid #F2F2F2",
    padding: "2rem",
    "::placeholder": {
        fontWeight: "500",
        color: "#BDBDBD",
    }
}, ({isEdit}: IEditProps) => ({
    height: isEdit ? "6.4rem" : "9rem",
}));

export const ButtonBox = styled.div({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
});

export const WordCounter = styled.span({
    color: "#BDBDBD",
    fontWeight: "500",
    padding: "0 2rem",
});

export const StoreCommentButton = styled.button({
    padding: "1.4rem 1.6rem",
}, ({isEdit=false}: IEditProps) => ({
    backgroundColor: isEdit ? "#FFD600" : "#000",
    color: isEdit ? "000" : "#FFF",
}));