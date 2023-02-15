import { Button } from "@/styles/common/button";
import { Input, Textarea, TitleLabel } from "@/styles/common/input";
import { Row, ContentsTitle, ContentsWrap, Column } from "@/styles/layout";


const PostForm = () => {

    return(
        <ContentsWrap>
            <ContentsTitle>게시물 등록</ContentsTitle>

            <Row gap="24">
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
                <Row gap="16">
                    <Input width="auto" size="5" type="text" id="address" placeholder="07250" />
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
                <ul className="list">
                    <li>Upload</li>
                    <li>Upload</li>
                    <li>Upload</li>
                </ul>
            </Column>
            <Column>
                <TitleLabel>메인 설정</TitleLabel>
                <Row gap="22">
                    <div className="radio-box">
                        <input type="radio" id="youtube" />
                        <label htmlFot="youtube">유튜브</label>
                    </div>
                    <div className="radio-box">
                        <input type="radio" id="photo" />
                        <label htmlFot="photo">사진</label>
                    </div>
                </Row>
            </Column>
            <div className="btn-box">
                <Button color="brand" size="lg">등록하기</Button>
            </div>
        </ContentsWrap>
    );

};

export default PostForm;