import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import BoardNewUI from "./BoardNew.presenter";
import CREATE_BOARD from "./BoardNew.queries";


const BoardNew = () => {

    const [ writer, setWriter ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ title, setTitle ] = useState('');
    const [ contents, setContents ] = useState('');

    const [ errorWriter, setErrorWriter ] = useState('');
    const [ errorPassword, setErrorPassword ] = useState('');
    const [ errorTitle, setErrorTitle ] = useState('');
    const [ errorContents, setErrorContents ] = useState('');

    const [ changeColor, setChangeColor ] = useState(false);

    const [ createBoard ] = useMutation(CREATE_BOARD);

    const router = useRouter();

    const onChangeWriter = (e) => {
        const { value } = e.target;
        setWriter(value);

        if (value && password && title && contents) {
            setChangeColor(true);
        } else {
            setChangeColor(false);
        }
    };

    const onChangePassword = (e) => {
        const { value } = e.target;
        setPassword(value);

        if (writer && value && title && contents) {
            setChangeColor(true);
        } else {
            setChangeColor(false);
        }
    };

    const onChangeTitle = (e) => {
        const { value } = e.target;
        setTitle(value);

        if (writer && password && value && contents) {
            setChangeColor(true);
        } else {
            setChangeColor(false);
        }
    };

    const onChangeContents = (e) => {
        const { value } = e.target;
        setContents(value);

        if (writer && password && title && value) {
            setChangeColor(true);
        } else {
            setChangeColor(false);
        }
    };

    const onSubmitPost = async(e) => {
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
    
                router.push(`/board/${result.data.createBoard._id}`);
            } catch (err) {
                console.log(err.message);
            }

        }

    };

    return <BoardNewUI 
                onChangeWriter={onChangeWriter}
                onChangePassword={onChangePassword}
                onChangeTitle={onChangeTitle}
                onChangeContents={onChangeContents}
                onSubmitPost={onSubmitPost}
                errorWriter={errorWriter}
                errorPassword={errorPassword}
                errorTitle={errorTitle}
                errorContents={errorContents}
                changeColor={changeColor}/>;

};


export default BoardNew;