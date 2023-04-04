import { useState } from "react";
import { IBoardCommentListUIItemProps } from "./BoardCommentList.types";
import BoardComment from "@/src/components/commons/Boardcomment/BoardComment.container";


const BoardCommentListUIItem = ({comment}: IBoardCommentListUIItemProps) => {

    const [ isEdit, setIsEdit ] = useState(false);


    return (
        <BoardComment comment={comment}
                        setIsEdit={setIsEdit}
                        isEdit={isEdit} />
    );

};


export default BoardCommentListUIItem;