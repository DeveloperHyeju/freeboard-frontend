import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import BoardDetailUI from "./BoardDetail.presenter";
import FETCH_BOARD from "./BoardDetail.queries";


const BoardDetail = () => {

    const router = useRouter();
    
    const { data } = useQuery(FETCH_BOARD, {
        variables: {
            boardId: router.query.boardId,
        }
    });


    return <BoardDetailUI data={data} />;

};


export default BoardDetail;