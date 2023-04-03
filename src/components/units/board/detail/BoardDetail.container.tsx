import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import BoardDetailUI from "./BoardDetail.presenter";
import { FETCH_BOARD } from "./BoardDetail.queries";


const BoardDetail = () => {

    const router = useRouter();
    
    const { data } = useQuery(FETCH_BOARD, {
        variables: {
            boardId: router.query.boardId,
        }
    });


    const onClickMoveToBoards = () => {
        router.push('/boards');
    };


    const onClickMoveToBoardEdit = (boardId) => {
        console.log(boardId);
        router.push(`/boards/${boardId}/edit`);
    };


    return <BoardDetailUI data={data} 
                        onClickMoveToBoards={onClickMoveToBoards}
                        onClickMoveToBoardEdit={onClickMoveToBoardEdit} />;

};


export default BoardDetail;