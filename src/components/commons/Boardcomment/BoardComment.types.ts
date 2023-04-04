import { IBoardComment } from "@/src/commons/types/generated/types";
import { Dispatch, SetStateAction } from "react";



export interface IBoardCommnetProps {
    comment: IBoardComment
    setIsEdit?: Dispatch<SetStateAction<boolean>>
    isEdit?: boolean
}

export interface IBoardCommentUIProps {
    onClickShowBoardCommentEditForm: () => void
    comment: IBoardComment
    setIsEdit?: Dispatch<SetStateAction<boolean>>
    isEdit?: boolean
}