import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import BoardPostsUI from "./BoardPosts.presenter";
import FETCH_BOARDS from "./BoardPosts.queries";


const BoardPosts = () => {

    const router = useRouter();
    const { data } = useQuery(FETCH_BOARDS);


    const onClickMoveToBoardDetail = (boardId) => {
        router.push(`/boards/${boardId}`);
    };


    const onClickMoveToBoardWrite = () => {
        router.push('/boards/new');
    };


    return <BoardPostsUI data={data} 
                        onClickMoveToBoardDetail={onClickMoveToBoardDetail}
                        onClickMoveToBoardWrite={onClickMoveToBoardWrite} />;

};


export default BoardPosts;