import { IQuery } from "@/src/commons/types/generated/types"


export interface IBoardDetailUIProps {
  data?: Pick<IQuery, "fetchBoard">
  onClickMoveToBoards: () => void
  onClickMoveToBoardEdit: () => void
}