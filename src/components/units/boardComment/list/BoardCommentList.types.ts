import { IBoardComment, IQuery } from "@/src/commons/types/generated/types"



export interface IBoardCommentListUIProps {
  data?: Pick<IQuery, "fetchBoardComments">
}

export interface IBoardCommentListUIItemProps {
  comment: IBoardComment
}