import {
  IMutation,
  IMutationCreateBoardArgs,
  IMutationUpdateBoardArgs,
} from "@/src/commons/types/generated/types";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import BoardFormUI from "./BoardForm.presenter";
import { CREATE_BOARD, UPDATE_BOARD } from "./BoardForm.queries";
import { IBoardFormProps, IUpdateBoardVariables } from "./BoardForm.types";

const BoardForm = ({ isEdit, data }: IBoardFormProps) => {
  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const [youtubeUrl, setYoutubeUrl] = useState("");

  const [errorWriter, setErrorWriter] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [errorTitle, setErrorTitle] = useState("");
  const [errorContents, setErrorContents] = useState("");

  const [isActive, setIsActive] = useState(false);

  const [createBoard] = useMutation<
    Pick<IMutation, "createBoard">,
    IMutationCreateBoardArgs
  >(CREATE_BOARD);
  const [updateBoard] = useMutation<
    Pick<IMutation, "updateBoard">,
    IMutationUpdateBoardArgs
  >(UPDATE_BOARD);

  const router = useRouter();

  const onChangeWriter = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setWriter(value);

    if (value && password && title && contents) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  const onChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setPassword(value);

    if (writer && value && title && contents) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  const onChangeTitle = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setTitle(value);

    if (writer && password && value && contents) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  const onChangeContents = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target;
    setContents(value);

    if (writer && password && title && value) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  const onChangeYoutubeUrl = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setYoutubeUrl(value);
  };

  const onClickCreateBoard = async () => {
    if (!writer) {
      setErrorWriter("작성자를 적어주세요.");
    }

    if (!password) {
      setErrorPassword("비밀번호를 적어주세요.");
    }

    if (!title) {
      setErrorTitle("제목을 적어주세요.");
    }

    if (!contents) {
      setErrorContents("내용을 적어주세요.");
    }

    if (writer && password && title && contents) {
      try {
        const result = await createBoard({
          variables: {
            createBoardInput: {
              writer,
              password,
              title,
              contents,
              youtubeUrl,
            },
          },
        });

        

        void router.push(`/boards/${result.data?.createBoard._id}`);
      } catch (err) {
        if (err instanceof Error) {
          alert(err.message);
        }
      }
    }
  };

  const onClickUpdateBoard = async () => {
    const updateBoardVariables: IUpdateBoardVariables = {
      updateBoardInput: {},
      password,
      boardId: String(router.query.boardId),
    };

    if (title) updateBoardVariables.updateBoardInput.title = title;
    if (contents) updateBoardVariables.updateBoardInput.contents = contents;
    if (youtubeUrl) updateBoardVariables.updateBoardInput.youtubeUrl = youtubeUrl;

    try {
      await updateBoard({
        variables: updateBoardVariables,
      });

      void router.push(`/boards/${String(router.query.boardId)}`);
    } catch (err) {
      if (err instanceof Error) {
        alert(err.message);
      }
    }
  };

  return (
    <BoardFormUI
      onChangeWriter={onChangeWriter}
      onChangePassword={onChangePassword}
      onChangeTitle={onChangeTitle}
      onChangeContents={onChangeContents}
      onChangeYoutubeUrl={onChangeYoutubeUrl}
      onClickCreateBoard={onClickCreateBoard}
      onClickUpdateBoard={onClickUpdateBoard}
      errorWriter={errorWriter}
      errorPassword={errorPassword}
      errorTitle={errorTitle}
      errorContents={errorContents}
      isActive={isActive}
      isEdit={isEdit}
      data={data}
    />
  );
};

export default BoardForm;
