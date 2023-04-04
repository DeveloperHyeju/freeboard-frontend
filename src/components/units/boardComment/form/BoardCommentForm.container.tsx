import { IMutation, IMutationCreateBoardCommentArgs, IMutationUpdateBoardCommentArgs } from "@/src/commons/types/generated/types";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import { FETCH_BOARD_COMMENTS } from "../list/BoardCommentList.queries";
import BoardCommentFormUI from "./BoardCommentForm.presenter";
import { CREATE_BOARD_COMMENT, UPDATE_BOARD_COMMENT } from "./BoardCommentForm.queries";
import { IBoardCommentFormProps, IUpdateBoardCommentVriables } from "./BoardCommentForm.types";


const BoardCommentForm = ({isEdit=false, setIsEdit=f=>f, comment}: IBoardCommentFormProps) => {

    const router = useRouter();

    const [ writer, setWriter ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ contents, setContents ] = useState("");

    const [ createBoardComment ] = useMutation<Pick<IMutation, "createBoardComment">, IMutationCreateBoardCommentArgs>(CREATE_BOARD_COMMENT);
    const [ updateBoardComment ] = useMutation<Pick<IMutation, "updateBoardComment">, IMutationUpdateBoardCommentArgs>(UPDATE_BOARD_COMMENT);


    const onChangeWriter = (e: ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setWriter(value);
    };


    const onChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setPassword(value);
    };


    const onChangeContents = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const { value } = e.target;
        setContents(value);
    };


    const onClickCreateBoardComment = async () => {
        if (!writer) {
            alert("작성자를 입력해주세요.")
            return;
        }

        if (!password) {
            alert("비밀번호를 입력해주세요.");
            return;
        }

        if (!contents) {
            alert("내용을 입력해주세요.");
            return;
        }

        console.log(password);

        try {
            await createBoardComment ({
                variables: {
                    createBoardCommentInput: {
                        writer,
                        password,
                        rating:3,
                        contents,
                    },
                    boardId: String(router.query.boardId),
                },
                refetchQueries: [{
                    query: FETCH_BOARD_COMMENTS,
                    variables: {
                        boardId: String(router.query.boardId),
                        page: 0,
                    }
                }],
            });


            alert("댓글이 정상적으로 저장되었습니다.");
        } catch (err: any) {
            alert(err.message);
        }
    };


    const onClickUpdateBoardComment = async () => {
        const updateBoardCommentVariables: IUpdateBoardCommentVriables = {
            updateBoardCommentInput: {},
            password,
            boardCommentId: comment._id,
        };

        if (contents) updateBoardCommentVariables.updateBoardCommentInput.contents = contents;

        try {
            await updateBoardComment ({
                variables: updateBoardCommentVariables,
                refetchQueries: [{
                    query: FETCH_BOARD_COMMENTS,
                    variables: {
                        boardId: String(router.query.boardId),
                        page: 0,
                    }
                }],
            });

            setIsEdit(false);
            alert("댓글이 정상적으로 수정되었습니다.");
        } catch (err: any) {
            alert(err.message);
        }
    };


    return <BoardCommentFormUI onChangeWriter={onChangeWriter}
                            onChangePassword={onChangePassword}
                            onChangeContents={onChangeContents}
                            onClickCreateBoardComment={onClickCreateBoardComment}
                            onClickUpdateBoardComment={onClickUpdateBoardComment}
                            writer={writer}
                            password={password}
                            contents={contents}
                            comment={comment}
                            isEdit={isEdit} />;

};


export default BoardCommentForm;