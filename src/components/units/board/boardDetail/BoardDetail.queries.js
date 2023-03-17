import { gql } from "@apollo/client";


const FETCH_BOARD = gql`
    query($boardId: ID!){
        fetchBoard(boardId: $boardId) {
            writer
            title
            contents
            likeCount
            dislikeCount
            updatedAt
        }
    }
`;


export default FETCH_BOARD;