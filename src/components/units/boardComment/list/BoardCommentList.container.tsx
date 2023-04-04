import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import BoardCommentListUI from "./BoardCommentList.presenter";
import { FETCH_BOARD_COMMENTS } from "./BoardCommentList.queries";
import { IQuery, IQueryFetchBoardCommentsArgs } from "@/src/commons/types/generated/types";


const BoardCommentList = () => {

    const router = useRouter();

    const { data } = useQuery<Pick<IQuery, "fetchBoardComments">, IQueryFetchBoardCommentsArgs>(FETCH_BOARD_COMMENTS, {
        variables: {
            boardId: String(router.query.boardId),
            page: 0,
        }
    });


    return <BoardCommentListUI data={data} />;

};


export default BoardCommentList;