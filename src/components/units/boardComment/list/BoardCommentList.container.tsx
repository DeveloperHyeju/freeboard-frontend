import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import BoardCommentListUI from "./BoardCommentList.presenter";
import { FETCH_BOARD_COMMENTS } from "./BoardCommentList.queries";


const BoardCommentList = () => {

    const router = useRouter();

    const { data } = useQuery(FETCH_BOARD_COMMENTS, {
        variables: {
            boardId: router.query.boardId,
            page: 0,
        }
    });


    return <BoardCommentListUI data={data} />;

};


export default BoardCommentList;