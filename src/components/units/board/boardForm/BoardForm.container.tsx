import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import BoardFormUI from "./BoardForm.presenter";
import { CREATE_BOARD, UPDATE_BOARD } from "./BoardForm.queries";


const BoardForm = ({isEdit, data}) => {

    const [ writer, setWriter ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ title, setTitle ] = useState('');
    const [ contents, setContents ] = useState('');

    const [ errorWriter, setErrorWriter ] = useState('');
    const [ errorPassword, setErrorPassword ] = useState('');
    const [ errorTitle, setErrorTitle ] = useState('');
    const [ errorContents, setErrorContents ] = useState('');

    const [ isActive, setIsActive ] = useState(false);

    const [ createBoard ] = useMutation(CREATE_BOARD);
    const [ updateBoard ] = useMutation(UPDATE_BOARD);

    const router = useRouter();


    const onChangeWriter = (e) => {
        const { value } = e.target;
        setWriter(value);

        if (value && password && title && contents) {
            setIsActive(true);
        } else {
            setIsActive(false);
        }
    };


    const onChangePassword = (e) => {
        const { value } = e.target;
        setPassword(value);

        if (writer && value && title && contents) {
            setIsActive(true);
        } else {
            setIsActive(false);
        }
    };


    const onChangeTitle = (e) => {
        const { value } = e.target;
        setTitle(value);

        if (writer && password && value && contents) {
            setIsActive(true);
        } else {
            setIsActive(false);
        }
    };


    const onChangeContents = (e) => {
        const { value } = e.target;
        setContents(value);

        if (writer && password && title && value) {
            setIsActive(true);
        } else {
            setIsActive(false);
        }
    };


    const onClickSubmitPost = async(e) => {
        e.preventDefault();

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
            setErrorContents("내용을 적어주세요.")
        }

        if (writer && password && title && contents) {

            try{
                const result = await createBoard({
                    variables: {
                        createBoardInput: {
                            writer,
                            password,
                            title,
                            contents,
                        }
                    }
                });
    
                router.push(`/boards/${result.data.createBoard._id}`);
            } catch (err) {
                console.log(err.message);
            }

        }

    };


    const onClickUpdatePost = async(e) => {
        e.preventDefault();

        const updateVariables = {
            updateBoardInput: {},
            password,
            boardId: router.query.boardId,
        };

        if (title) updateVariables.updateBoardInput.title = title;
        if (contents) updateVariables.updateBoardInput.contents = contents;

        try{
            await updateBoard({
                variables: updateVariables,
            });

            router.push(`/boards/${router.query.boardId}`);
        } catch (err) {
            alert(err.message);
        }

    };
    

    return <BoardFormUI 
                onChangeWriter={onChangeWriter}
                onChangePassword={onChangePassword}
                onChangeTitle={onChangeTitle}
                onChangeContents={onChangeContents}
                onClickSubmitPost={onClickSubmitPost}
                onClickUpdatePost={onClickUpdatePost}
                errorWriter={errorWriter}
                errorPassword={errorPassword}
                errorTitle={errorTitle}
                errorContents={errorContents}
                isActive={isActive}
                isEdit={isEdit}
                data={data} />;

};


export default BoardForm;