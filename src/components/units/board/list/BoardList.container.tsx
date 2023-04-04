import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import BoardListUI from "./BoardList.presenter";
import FETCH_BOARDS from "./BoardList.queries";
import { IQuery, IQueryFetchBoardsArgs } from '@/src/commons/types/generated/types';


const BoardList = () => {

    const router = useRouter();
    const { data } = useQuery<Pick<IQuery, "fetchBoards">, IQueryFetchBoardsArgs>(FETCH_BOARDS);


    const onClickMoveToBoardDetail = (boardId: string) => {
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