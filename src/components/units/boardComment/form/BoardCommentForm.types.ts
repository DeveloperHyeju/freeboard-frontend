import { IBoardComment } from "@/src/commons/types/generated/types";
import { ChangeEvent, Dispatch, SetStateAction } from "react";

export interface IBoardCommentFormProps {
  isEdit?: boolean;
  setIsEdit?: Dispatch<SetStateAction<boolean>>;
  comment?: IBoardComment;
}

interface IUpdateBoardCommentInput {
  rating?: number;
  contents?: string;
}

export interface IUpdateBoardCommentVriables {
  updateBoardCommentInput: IUpdateBoardCommentInput;
  password: string;
  boardCommentId: string;
}

export interface IBoardCommentFormUIProps {
  onChangeWriter: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangeContents: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  onClickCreateBoardComment: () => void;
  onClickUpdateBoardComment: () => void;
  setRating: Dispatch<SetStateAction<number>>;
  writer: string;
  password: string;
  rating: number;
  contents: string;
  isEdit: boolean;
  comment?: IBoardComment;
}

export interface IEditProps {
  isEdit?: boolean;
}
