import styled from "@emotion/styled";
import BoardCommentList from "./baordCommentList/BoardCommentList.container";
import BoardCommentForm from "./boardCommentForm/boardCommentForm.container";


const Wrap = styled.div({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
});

const Comment = styled.div({
    maxWidth: "120rem",
    width: "100%",
    borderTop: "1px solid #BDBDBD",
});

const CommentTitle = styled.span({
    padding: "4rem 0",
    fontWeight: "500",
    display: "flex",
    gap: "1.2rem",
    alignItems: "center",
    "::before" : {
        display: "block",
        content: "''",
        width: "2.4rem",
        height: "2.4rem",
        background: "url('/icon/comment_icon.png') no-repeat center center / 2.4rem",
    },
});



const BoardComment = () => {

    return (
        <Wrap>
            <Comment>
                <CommentTitle>댓글</CommentTitle>
                <BoardCommentForm />
                <BoardCommentList />
            </Comment>
        </Wrap>
    );

};


export default BoardComment;