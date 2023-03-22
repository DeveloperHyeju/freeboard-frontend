import { gql } from "@apollo/client";


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


export const DELETE_BOARD = gql`
    mutation ($boardId: ID!){
        deleteBoard (boardId: $boardId)
    }
`;