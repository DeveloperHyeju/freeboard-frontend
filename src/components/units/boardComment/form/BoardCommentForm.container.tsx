import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import { FETCH_BOARD_COMMENTS } from "../list/BoardCommentList.queries";
import BoardCommentFormUI from "./BoardCommentForm.presenter";
import { CREATE_BOARD_COMMENT, UPDATE_BOARD_COMMENT } from "./BoardCommentForm.queries";


const BoardCommentForm = ({isEdit, setIsEdit, comment}) => {

    const router = useRouter();

    const [ writer, setWriter ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ contents, setContents ] = useState("");

    const [ createBoardComment ] = useMutation(CREATE_BOARD_COMMENT);
    const [ updateBoardComment ] = useMutation(UPDATE_BOARD_COMMENT);


    const onChangeWriter = (e) => {
        const { value } = e.target;
        setWriter(value);
    };


    const onChangePassword = (e) => {
        const { value } = e.target;
        setPassword(value);
    };


    const onChangeContents = (e) => {
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
                    boardId: router.query.boardId,
                },
                refetchQueries: [{
                    query: FETCH_BOARD_COMMENTS,
                    variables: {
                        boardId: router.query.boardId,
                        page: 0,
                    }
                }],
            });

            setWriter("");
            setPassword("");
            setContents("");

            alert("댓글이 정상적으로 저장되었습니다.");
        } catch (err) {
            alert(err.message);
        }
    };


    const onClickUpdateBoardComment = async () => {
        const updateBoardCommentVariables = {
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
                        boardId: router.query.boardId,
                        page: 0,
                    }
                }],
            });

            setIsEdit(false);
            alert("댓글이 정상적으로 수정되었습니다.");
        } catch (err) {
            alert(err.message);
        }
    };


    return <BoardCommentFormUI onChangeWriter={onChangeWriter}
                            onChangePassword={onChangePassword}
                            onChangeContents={onChangeContents}
                            writer={writer}
                            password={password}
                            contents={contents}
                            setWriter={setWriter}
                            setContents={setContents}
                            onClickCreateBoardComment={onClickCreateBoardComment}
                            onClickUpdateBoardComment={onClickUpdateBoardComment}
                            comment={comment}
                            isEdit={isEdit} />;

};


export default BoardCommentForm;