import { setDate } from "@/src/commons/libraries/utils";
import * as style from "./BoardComment.styles";
import { IBoardCommentUIProps } from "./BoardComment.types";
import BoardCommentForm from "../../units/boardComment/form/BoardCommentForm.container";


const BoardCommentUI = ({onClickShowBoardCommentEditForm, comment, setIsEdit, isEdit}: IBoardCommentUIProps) => {
    

    return (
        <style.CommentWrap>
            { !isEdit && 
                <>
                    <style.Info>
                        <style.Avatar src="/icon/user_icon.png" alt="프로필 이미지" />
                        <style.Comment>
                            <style.CommentInfo>
                                <style.CommentWriter>{comment.writer}</style.CommentWriter>
                            </style.CommentInfo>
                            <style.CommentContents>{comment.contents}</style.CommentContents>
                            <style.CommentDate>{setDate(comment.createdAt)}</style.CommentDate>
                        </style.Comment>
                    </style.Info>
                    <style.ButtonBox>
                        <style.NestedCommentButton></style.NestedCommentButton>
                        <style.EditButton onClick={onClickShowBoardCommentEditForm}></style.EditButton>
                        <style.DeleteButton></style.DeleteButton>
                    </style.ButtonBox>
                </> }
            { isEdit && <BoardCommentForm isEdit={true} 
                                        setIsEdit={setIsEdit} 
                                        comment={comment} /> }
        </style.CommentWrap>
    );

};


export default BoardCommentUI;