import styled from "@emotion/styled";
import plusIcon from "../../../../../public/icon/add_icon.png";


export const Wrap = styled.div({
    padding: "8rem",
    display: "flex",
    justifyContent: "center",
});

export const ContentsWrap = styled.div({
    display: "flex",
    maxWidth: "120rem",
    flex: "1 1 auto",
    boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.2)",
});

export const Form = styled.form({
    width: "100%",
    padding: "8rem 10.2rem",
    display: "flex",
    flexDirection: "column",
    gap: "8rem",
});

export const Title = styled.h2({
    fontSize: "3.6rem",
    fontWeight: "700",
    textAlign: "center",
});

export const Contents = styled.div({
    display: "flex",
    flexDirection: "column",
    gap: "4rem",
});

export const ErrorMessage = styled.p({
    color: "red",
    fontSize: "1.4rem",
    marginTop: "-1.1rem",
});

export const InputWrap = styled.div({
    display: "flex",
    gap: "2.4rem",
});

export const InputBox = styled.div({
    display: "flex",
    width: "100%",
    flexDirection: "column",
    gap: "1.6rem",
});

export const InputTitle = styled.label({
    fontWeight: "500",
});

export const Input = styled.input({
    padding: "1.4rem 1.6rem",
    border: "1px solid #bdbdbd",
    "::placeholder": {
        color: "#c4c4c4",
    },
});

export const Textarea = styled.textarea({
    height: "48rem",
    padding: "1.4rem 1.6rem",
    border: "1px solid #bdbdbd",
    "::placeholder": {
        color: "#c4c4c4",
    },
});

export const AddressBox = styled.div({
    display: "flex",
    gap: "1.6rem",
});

export const AddressSearchButton = styled.button({
    padding: "1.4rem 1.6rem",
    color: "#fff",
    backgroundColor: "#000",
    fontWeight: "500",
});

export const PhotoList = styled.ul({
    display: "flex",
    gap: "2.4rem",
});

export const PhotoBox = styled.li({
    width: "7.8rem",
    height: "7.8rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#BDBDBD",
    cursor: "pointer",
    "::before": {
        display: "block",
        content: "''",
        width: "2.4rem",
        height: "2.4rem",
        background: `url(${plusIcon.src}) no-repeat center center / 1.4rem 1.4rem`
    },
});

export const RadioBox = styled.div({
    display: "flex",
    gap: "2.2rem",
});

export const Radio = styled.div({
    display: "flex",
    gap: "1rem",
    alignItems: "center",
    "label": {
        fontWeight: "500",
    },
});

export const ButtonBox = styled.div({
    display: "flex",
    justifyContent: "center",
    gap: "2.4rem",
});

export const YellowButton = styled.button({
    padding: "1.4rem 6rem",
    fontWeight: "500",
}, ({changeColor}) => ({backgroundColor:changeColor ? "#ffd600" : "#BDBDBD"}));