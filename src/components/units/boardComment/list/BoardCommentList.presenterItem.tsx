import { setDate } from "@/src/commons/libraries/utils";
import { useState } from "react";
import BoardCommentForm from "../form/BoardCommentForm.container";
import * as style from "./BoardCommentList.styles";
import { IBoardCommentListUIItemProps } from "./BoardCommentList.types";


const BoardCommentListUIItem = ({comment}: IBoardCommentListUIItemProps) => {

    const [ isEdit, setIsEdit ] = useState(false);

    const onClickShowBoardCommentEditForm = () => {
        setIsEdit(true);
    };

<<<<<<< HEAD
    return (
        <BoardComment comment={comment}
                        setIsEdit={setIsEdit}
                        isEdit={isEdit} />
=======

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
                        <style.EditButton onClick={onClickShowBoardCommentEditForm}></style.EditButton>
                        <style.DeleteButton></style.DeleteButton>
                    </style.ButtonBox>
                </> }
            { isEdit && <BoardCommentForm isEdit={true} 
                                        setIsEdit={setIsEdit} 
                                        comment={comment} /> }
        </style.CommentWrap>
>>>>>>> parent of 3c02210 (모든 파일에 typescript 적용)
    );

};


export default BoardCommentListUIItem;