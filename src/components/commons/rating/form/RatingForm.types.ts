import { IBoardComment } from "@/src/commons/types/generated/types";
import { Dispatch, MouseEvent, SetStateAction } from "react";

export interface IRatingFormProps {
  setRating: Dispatch<SetStateAction<number>>;
  rating: number;
  isEdit: boolean;
  comment: IBoardComment | undefined;
}

export interface IRatingFormUIProps {
  rating: number;
  onClickScore: (e: MouseEvent<HTMLButtonElement>) => void;
}
