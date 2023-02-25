import { AddressBox, AddressSearchButton, ButtonBox, Contents, ContentsWrap, ErrorMessage, Form, Input, InputBox, InputTitle, InputWrap, PhotoBox, PhotoList, Radio, RadioBox, Textarea, Title, Wrap, YellowButton } from "@/styles/boardForm";
import { useState } from "react";


const PostForm = () => {

    const [ writer, setWriter ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ title, setTitle ] = useState('');
    const [ contents, setContents ] = useState('');

    const [ errorWriter, setErrorWriter ] = useState('');
    const [ errorPassword, setErrorPassword ] = useState('');
    const [ errorTitle, setErrorTitle ] = useState('');
    const [ errorContents, setErrorContents ] = useState('');

    const onChangeWriter = (e) => {
        const { value } = e.target;
        setWriter(value);
    };

    const onChangePassword = (e) => {
        const { value } = e.target;
        setPassword(value);
    };

    const onChangeTitle = (e) => {
        const { value } = e.target;
        setTitle(value);
    };

    const onChangeContents = (e) => {
        const { value } = e.target;
        setContents(value);
    };

    const onSubmitPost = (e) => {
        e.preventDefault();

        if (!writer) {
            setErrorWriter("작성자를 적어주세요.");
        }

        if(!password) {
            setErrorPassword("비밀번호를 적어주세요.");
        }

        if(!title) {
            setErrorTitle("제목을 적어주세요.");
        }

        if(!contents) {
            setErrorContents("내용을 적어주세요.")
        }
    };

    return(
        <Wrap>
            <ContentsWrap>
                <Form onSubmit={onSubmitPost}>
                    <Title>게시물 등록</Title>
                    <Contents>
                        <InputWrap>
                            <InputBox>
                                <InputTitle>작성자</InputTitle>
                                <Input type="text" placeholder="이름을 적어주세요." onChange={onChangeWriter} />
                                <ErrorMessage>{errorWriter}</ErrorMessage>
                            </InputBox>
                            <InputBox>
                                <InputTitle>비밀번호</InputTitle>
                                <Input type="password" placeholder="비밀번호를 적어주세요." onChange={onChangePassword} />
                                <ErrorMessage>{errorPassword}</ErrorMessage>
                            </InputBox>
                        </InputWrap>
                        <InputBox>
                            <InputTitle>제목</InputTitle>
                            <Input type="text" placeholder="제목을 적어주세요." onChange={onChangeTitle} />
                            <ErrorMessage>{errorTitle}</ErrorMessage>
                        </InputBox>
                        <InputBox>
                            <InputTitle>내용</InputTitle>
                            <Textarea placeholder="내용을 적어주세요." onChange={onChangeContents}></Textarea>
                            <ErrorMessage>{errorContents}</ErrorMessage>
                        </InputBox>
                        <InputBox>
                            <InputTitle>주소</InputTitle>
                            <AddressBox>
                                <Input size="2" placeholder="07250" />
                                <AddressSearchButton>우편번호 검색</AddressSearchButton>
                            </AddressBox>
                            <Input />
                            <Input />
                        </InputBox>
                        <InputBox>
                            <InputTitle>유튜브</InputTitle>
                            <Input type="text" placeholder="링크를 복사해주세요." />
                        </InputBox>
                        <InputBox>
                            <InputTitle>사진첨부</InputTitle>
                            <PhotoList>
                                <PhotoBox>Upload</PhotoBox>
                                <PhotoBox>Upload</PhotoBox>
                                <PhotoBox>Upload</PhotoBox>
                            </PhotoList>
                        </InputBox>
                        <InputBox>
                            <InputTitle>메인 설정</InputTitle>
                            <RadioBox>
                                <Radio>
                                    <input id="youtube" type="radio" name="main" defaultChecked/>
                                    <label htmlFor="youtube">유튜브</label>
                                </Radio>
                                <Radio>
                                    <input id="photo" type="radio" name="main" />
                                    <label htmlFor="photo">사진</label>
                                </Radio>
                            </RadioBox>
                        </InputBox>
                    </Contents>
                    <ButtonBox>
                        <YellowButton>등록하기</YellowButton>
                    </ButtonBox>
                </Form>
            </ContentsWrap>
        </Wrap>
    );

};

export default PostForm;