import { gql } from "@apollo/client";


const FETCH_BOARDS = gql`
    query fetchBoards {
        fetchBoards {
            _id
            title
            writer
            createdAt
        }
    }
`;


export default FETCH_BOARDS;