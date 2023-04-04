import BoardCommentUI from "./BoardComment.presenter";
import { IBoardCommnetProps } from "./BoardComment.types";


const BoardComment = ({comment, setIsEdit=f=>f, isEdit}: IBoardCommnetProps) => {

    const onClickShowBoardCommentEditForm = () => {
        setIsEdit(true);
    };


    return <BoardCommentUI onClickShowBoardCommentEditForm={onClickShowBoardCommentEditForm}
                        comment={comment}
                        setIsEdit={setIsEdit}
                        isEdit={isEdit} />;

};


export default BoardComment;