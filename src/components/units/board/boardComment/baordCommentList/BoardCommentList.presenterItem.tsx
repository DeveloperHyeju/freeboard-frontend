import { setDate } from "@/src/commons/libraries/utils";
import RatingComponent from "@/src/components/commons/RatingComponent";
import { useState } from "react";
import BoardCommentForm from "../boardCommentForm/boardCommentForm.container";
import * as style from "./BoardCommentList.styles";


const BoardCommentListUIItem = ({comment}) => {

    const [ isEdit, setIsEdit ] = useState(false);

    const onClickShowBoardCommentEditForm = () => {
        setIsEdit(true);
    };


    return (
        <style.CommentWrap>
            { !isEdit && 
                <>
                    <style.Info>
                        <style.Avatar src="/icon/user_icon.png" alt="프로필 이미지" />
                        <style.Comment>
                            <style.CommentInfo>
                                <style.CommentWriter>{comment.writer}</style.CommentWriter>
                                <style.CommentRating>
                                    <RatingComponent rating={comment.rating} />
                                </style.CommentRating>
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
    );

};


export default BoardCommentListUIItem;