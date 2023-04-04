import { ChangeEvent } from "react"
import { IQuery } from '@/src/commons/types/generated/types';


export interface IBoardFormProps {
  isEdit: boolean
  data: Pick<IQuery, "fetchBoard">
}

interface IUpdateBoardInputVariables {
  title?: string
  contents?: string
}

export interface IUpdateBoardVariables {
  updateBoardInput: IUpdateBoardInputVariables
  password: string
  boardId: string
}

export interface IBoardFormUIProps {
  onChangeWriter: (e: ChangeEvent<HTMLInputElement>) => void
  onChangePassword: (e: ChangeEvent<HTMLInputElement>) => void
  onChangeTitle: (e: ChangeEvent<HTMLInputElement>) => void
  onChangeContents: (e: ChangeEvent<HTMLTextAreaElement>) => void
  onClickCreateBoard: () => void
  onClickUpdateBoard: () => void
  errorWriter: string
  errorPassword: string
  errorTitle: string
  errorContents: string
  isActive: boolean
  isEdit: boolean
  data: Pick<IQuery, "fetchBoard">
}

export interface IYellowButtonProps {
  isActive: boolean
}