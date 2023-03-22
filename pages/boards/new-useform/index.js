import { AddressBox, AddressSearchButton, ButtonBox, Contents, ContentsWrap, ErrorMessage, Form, Input, InputBox, InputTitle, InputWrap, PhotoBox, PhotoList, Radio, RadioBox, Textarea, Title, Wrap, YellowButton } from "@/styles/boardForm";
import { useForm } from "react-hook-form";


const PostForm = () => {

    const { register, handleSubmit, formState:{errors} } = useForm();
    
    const onSubmitPost = () => {
        alert("작성이 완료되었습니다.")
    };

    return(
        <Wrap>
            <ContentsWrap>
                <Form onSubmit={handleSubmit(onSubmitPost)}>
                    <Title>게시물 등록</Title>
                    <Contents>
                        <InputWrap>
                            <InputBox>
                                <InputTitle>작성자</InputTitle>
                                <Input type="text" placeholder="이름을 적어주세요." {...register("writer", {required: "이름을 적어주세요."})} />
                                <ErrorMessage>{errors.writer?.message}</ErrorMessage>
                            </InputBox>
                            <InputBox>
                                <InputTitle>비밀번호</InputTitle>
                                <Input type="password" placeholder="비밀번호를 적어주세요." {...register("password", {required: "비밀번호를 적어주세요."})} />
                                <ErrorMessage>{errors.password?.message}</ErrorMessage>
                            </InputBox>
                        </InputWrap>
                        <InputBox>
                            <InputTitle>제목</InputTitle>
                            <Input type="text" placeholder="제목을 적어주세요." {...register("title", {required: "제목을 적어주세요."})} />
                            <ErrorMessage>{errors.title?.message}</ErrorMessage>
                        </InputBox>
                        <InputBox>
                            <InputTitle>내용</InputTitle>
                            <Textarea placeholder="내용을 적어주세요." {...register("contents", {required: "내용을 적어주세요."})}></Textarea>
                            <ErrorMessage>{errors.contents?.message}</ErrorMessage>
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