import BoardCommentListUIItem from "./BoardCommentList.presenterItem";
import * as style from "./BoardCommentList.styles";
import { IBoardCommentListUIProps } from "./BoardCommentList.types";


const BoardCommentListUI = ({data}:IBoardCommentListUIProps) => {    

    const boardCommentList = data?.fetchBoardComments.map((comment: any) =>  <BoardCommentListUIItem key={comment._id} 
                                                                                                comment={comment} />);


    return (
        <style.CommentList>
            {boardCommentList}
        </style.CommentList>
    );

};


export default BoardCommentListUI;