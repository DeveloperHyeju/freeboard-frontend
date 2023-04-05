import styled from "@emotion/styled";


export const CommentList = styled.ul({});

export const CommentWrap = styled.li({
    borderBottom: "1px solid #BDBDBD",
    padding: "2rem 0",
    display: "flex",
    justifyContent: "space-between",
});

export const Info = styled.div({
    display: "flex",
    gap: "1.6rem",
});

export const Avatar = styled.img({
    width: "4rem",
    alignSelf: "flex-start",
});

export const Comment = styled.div({});

export const CommentInfo = styled.div({
    display: "flex",
    gap: "1.8rem",
    alignItems: "center",
});

export const CommentWriter = styled.span({
    fontWeight: "500",
});

export const CommentRating = styled.div({
    display: "flex",
    alignItems: "center",
});

export const CommentContents = styled.p({
    color: "#4F4F4F",
    paddingBottom: "2rem",
});

export const CommentDate = styled.span({
    fontSize: "1.2rem",
    color: "#BDBDBD",
});

export const ButtonBox = styled.div({
    display: "flex",
    gap: "1rem",
});

export const EditButton = styled.button({
    width: "2.4rem",
    height: "2.4rem",
    background: "url('/icon/comment_write_icon.png') no-repeat center center",
});

export const DeleteButton = styled.button({
    width: "2.4rem",
    height: "2.4rem",
    background: "url('/icon/comment_delete_icon.png') no-repeat center center",
});