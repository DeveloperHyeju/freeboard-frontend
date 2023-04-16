import {
  IMutation,
  IMutationDislikeBoardArgs,
  IMutationLikeBoardArgs,
  IQuery,
  IQueryFetchBoardArgs,
} from "@/src/commons/types/generated/types";
import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import BoardDetailUI from "./BoardDetail.presenter";
import { DISLIKE_BOARD, FETCH_BOARD, LIKE_BOARD } from "./BoardDetail.queries";

const BoardDetail = () => {
  const router = useRouter();

  const [likeBoard] = useMutation<
    Pick<IMutation, "likeBoard">,
    IMutationLikeBoardArgs
  >(LIKE_BOARD);

  const [dislikeBoard] = useMutation<
    Pick<IMutation, "dislikeBoard">,
    IMutationDislikeBoardArgs
  >(DISLIKE_BOARD);

  const { data } = useQuery<Pick<IQuery, "fetchBoard">, IQueryFetchBoardArgs>(
    FETCH_BOARD,
    {
      variables: {
        boardId: String(router.query.boardId),
      },
    }
  );

  const onClickLikeBoard = async () => {
    try {
      await likeBoard({
        variables: {
          boardId: String(router.query.boardId),
        },
        refetchQueries: [
          {
            query: FETCH_BOARD,
            variables: { boardId: String(router.query.boardId) },
          },
        ],
      });
    } catch (err) {
      if (err instanceof Error) {
        alert(err.message);
      }
    }
  };

  const onClickDislikeBoard = async () => {
    try {
      await dislikeBoard({
        variables: {
          boardId: String(router.query.boardId),
        },
        refetchQueries: [
          {
            query: FETCH_BOARD,
            variables: { boardId: String(router.query.boardId) },
          },
        ],
      });
    } catch (err) {
      if (err instanceof Error) {
        alert(err.message);
      }
    }
  };

  const onClickMoveToBoards = () => {
    void router.push("/boards");
  };

  const onClickMoveToBoardEdit = (boardId: string | undefined) => {
    if (boardId === undefined) return;
    void router.push(`/boards/${boardId}/edit`);
  };

  return (
    <BoardDetailUI
      data={data}
      onClickMoveToBoards={onClickMoveToBoards}
      onClickMoveToBoardEdit={onClickMoveToBoardEdit}
      onClickLikeBoard={onClickLikeBoard}
      onClickDislikeBoard={onClickDislikeBoard}
    />
  );
};

export default BoardDetail;
