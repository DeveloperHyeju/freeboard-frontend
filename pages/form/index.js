import { Button } from "@/styles/button";
import { Input, RadioBox, Textarea, TitleLabel } from "@/styles/input";
import { Row, ContentsTitle, ContentsWrap, Column, ButtonBox, Contents } from "@/styles/layout";
import { AttatchPhotoList } from '@/styles/list';


const PostForm = () => {

    return(
        <ContentsWrap>
            <ContentsTitle>게시물 등록</ContentsTitle>

            <Contents>
                <Row gap="2.4" pattern="stretch">
                    <Column>
                        <TitleLabel htmlFor="id">작성자</TitleLabel>
                        <Input type="text" id="id" placeholder="이름을 적어주세요."/>
                    </Column>
                    <Column>
                        <TitleLabel htmlFor="password">비밀번호</TitleLabel>
                        <Input type="password" id="password" placeholder="비밀번호를 적어주세요."/>
                    </Column>
                </Row>
                <Column>
                    <TitleLabel htmlFor="title">제목</TitleLabel>
                    <Input type="text" id="title" placeholder="제목을 작성해주세요."/>
                </Column>
                <Column>
                    <TitleLabel htmlFor="contents">내용</TitleLabel>
                    <Textarea height="400" id="contents" placeholder="내용을 작성해주세요."></Textarea>
                </Column>
                <Column>
                    <TitleLabel htmlFor="address">주소</TitleLabel>
                    <Row gap="1.6">
                        <Input width="7.7" size="1" type="text" id="address" placeholder="07250" />
                        <Button color="black" size="m" className="btn btn-square btn-black btn-m">우편번호 검색</Button>
                    </Row>
                    <Input type="text" />
                    <Input type="text" />
                </Column>
                <Column>
                    <TitleLabel htmlFor="youtube-link">유튜브</TitleLabel>
                    <Input type="text" id="youtube-link" placeholder="링크를 복사해주세요." />
                </Column>
                <Column>
                    <TitleLabel>사진 첨부</TitleLabel>
                    <AttatchPhotoList>
                        <li>Upload</li>
                        <li>Upload</li>
                        <li>Upload</li>
                    </AttatchPhotoList>
                </Column>
                <Column>
                    <TitleLabel>메인 설정</TitleLabel>
                    <Row gap="2.2">
                        <RadioBox>
                            <input type="radio" name="main" id="youtube" checked />
                            <label htmlFor="youtube">유튜브</label>
                        </RadioBox>
                        <RadioBox>
                            <input type="radio" name="main" id="photo" />
                            <label htmlFor="photo">사진</label>
                        </RadioBox>
                    </Row>
                </Column>
            </Contents>
            
            <ButtonBox align="center">
                <Button color="brand" size="lg">등록하기</Button>
            </ButtonBox>
        </ContentsWrap>
    );

};

export default PostForm;