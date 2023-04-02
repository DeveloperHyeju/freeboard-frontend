import BoardForm from "@/src/components/units/board/boardForm/BoardForm.container";
import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";

export const FETCH_BOARD = gql`
    query ($boardId: ID!){
        fetchBoard (boardId: $boardId) {
            _id
            writer
            title
            contents
            likeCount
            dislikeCount
            updatedAt
        }
    }
`;


const BoardEditPage = () => {

    const router = useRouter();

    const { data } = useQuery(FETCH_BOARD, {
        variables: {
            boardId: router.query.boardId,
        }
    });


    return <BoardForm isEdit={true} data={data} />;

};


export default BoardEditPage;