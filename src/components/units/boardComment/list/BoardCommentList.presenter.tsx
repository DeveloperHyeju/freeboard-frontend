import { IBoardComment } from "@/src/commons/types/generated/types";
import BoardCommentListUIItem from "./BoardCommentList.presenterItem";
import * as style from "./BoardCommentList.styles";
import { IBoardCommentListUIProps } from "./BoardCommentList.types";


const BoardCommentListUI = ({data}:IBoardCommentListUIProps) => {    

    const boardCommentList = data?.fetchBoardComments.map((comment: IBoardComment) =>  <BoardCommentListUIItem key={comment._id} 
                                                                                                            comment={comment} />);


    return (
        <style.CommentList>
            {boardCommentList}
        </style.CommentList>
    );

};


export default BoardCommentListUI;