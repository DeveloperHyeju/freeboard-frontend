import * as style from "./BoardWrite.styles";


const BoardWriteUI = ({onChangeWriter, onChangePassword, onChangeTitle, onChangeContents, onSubmitPost, errorWriter, errorPassword, errorTitle, errorContents}) => {

    return(
        <style.Wrap>
            <style.ContentsWrap>
                <style.Form onSubmit={onSubmitPost}>
                    <style.Title>게시물 등록</style.Title>
                    <style.Contents>
                        <style.InputWrap>
                            <style.InputBox>
                                <style.InputTitle>작성자</style.InputTitle>
                                <style.Input type="text" placeholder="이름을 적어주세요." onChange={onChangeWriter} />
                                <style.ErrorMessage>{errorWriter}</style.ErrorMessage>
                            </style.InputBox>
                            <style.InputBox>
                                <style.InputTitle>비밀번호</style.InputTitle>
                                <style.Input type="password" placeholder="비밀번호를 적어주세요." onChange={onChangePassword} />
                                <style.ErrorMessage>{errorPassword}</style.ErrorMessage>
                            </style.InputBox>
                        </style.InputWrap>
                        <style.InputBox>
                            <style.InputTitle>제목</style.InputTitle>
                            <style.Input type="text" placeholder="제목을 적어주세요." onChange={onChangeTitle} />
                            <style.ErrorMessage>{errorTitle}</style.ErrorMessage>
                        </style.InputBox>
                        <style.InputBox>
                            <style.InputTitle>내용</style.InputTitle>
                            <style.Textarea placeholder="내용을 적어주세요." onChange={onChangeContents}></style.Textarea>
                            <style.ErrorMessage>{errorContents}</style.ErrorMessage>
                        </style.InputBox>
                        <style.InputBox>
                            <style.InputTitle>주소</style.InputTitle>
                            <style.AddressBox>
                                <style.Input size="2" placeholder="07250" />
                                <style.AddressSearchButton>우편번호 검색</style.AddressSearchButton>
                            </style.AddressBox>
                            <style.Input />
                            <style.Input />
                        </style.InputBox>
                        <style.InputBox>
                            <style.InputTitle>유튜브</style.InputTitle>
                            <style.Input type="text" placeholder="링크를 복사해주세요." />
                        </style.InputBox>
                        <style.InputBox>
                            <style.InputTitle>사진첨부</style.InputTitle>
                            <style.PhotoList>
                                <style.PhotoBox>Upload</style.PhotoBox>
                                <style.PhotoBox>Upload</style.PhotoBox>
                                <style.PhotoBox>Upload</style.PhotoBox>
                            </style.PhotoList>
                        </style.InputBox>
                        <style.InputBox>
                            <style.InputTitle>메인 설정</style.InputTitle>
                            <style.RadioBox>
                                <style.Radio>
                                    <input id="youtube" type="radio" name="main" defaultChecked/>
                                    <label htmlFor="youtube">유튜브</label>
                                </style.Radio>
                                <style.Radio>
                                    <input id="photo" type="radio" name="main" />
                                    <label htmlFor="photo">사진</label>
                                </style.Radio>
                            </style.RadioBox>
                        </style.InputBox>
                    </style.Contents>
                    <style.ButtonBox>
                        <style.YellowButton>등록하기</style.YellowButton>
                    </style.ButtonBox>
                </style.Form>
            </style.ContentsWrap>
        </style.Wrap>
    );

};


export default BoardWriteUI;