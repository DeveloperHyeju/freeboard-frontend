import BoardCommentListUIItem from "./BoardCommentList.presenterItem";
import * as style from "./BoardCommentList.styles";


const BoardCommentListUI = ({data}) => {    

    const boardCommentList = data?.fetchBoardComments.map((comment) =>  <BoardCommentListUIItem key={comment._id} 
                                                                                                comment={comment} />);


    return (
        <style.CommentList>
            {boardCommentList}
        </style.CommentList>
    );

};


export default BoardCommentListUI;