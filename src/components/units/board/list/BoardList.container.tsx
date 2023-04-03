import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import BoardListUI from "./BoardList.presenter";
import FETCH_BOARDS from "./BoardList.queries";


const BoardList = () => {

    const router = useRouter();
    const { data } = useQuery(FETCH_BOARDS);


    const onClickMoveToBoardDetail = (boardId) => {
        router.push(`/boards/${boardId}`);
    };


    const onClickMoveToBoardCreate = () => {
        router.push('/boards/create');
    };


    return <BoardListUI data={data} 
                        onClickMoveToBoardDetail={onClickMoveToBoardDetail}
                        onClickMoveToBoardCreate={onClickMoveToBoardCreate} />;

};


export default BoardList;