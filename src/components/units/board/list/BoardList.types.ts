
import { IQuery } from '@/src/commons/types/generated/types';


export interface IBoardListProps {
  onClickMoveToBoardDetail: (boardId: string) => void
  onClickMoveToBoardCreate: () => void
  data?: Pick<IQuery, "fetchBoards">
}