import { Inner, Title, Row, Label, Input, ContentInput, Column, AddressInput, AddressButton, DetailedAddressInput, AttachBoxList, AttachBox, RadioBox, RadioBoxLabel, ButtonBox, MainButton } from "@/styles/postForm";

const PostForm = () => {

    return(
        <Inner>
            <Title>게시물 등록</Title>
            <Row>
                <Label>제목</Label>
                <Input type="text" placeholder="제목을 작성해주세요." />
            </Row>
            <Row>
                <Label>내용</Label>
                <ContentInput type="text" placeholder="내용을 작성해주세요." />
            </Row>
            <Row>
                <Label>주소</Label>
                <Column>
                    <AddressInput placeholder="57250" />
                    <AddressButton>우편번호 검색</AddressButton>
                </Column>
                <DetailedAddressInput type="text" />
                <DetailedAddressInput type="text" />
            </Row>
            <Row>
                <Label>유튜브</Label>
                <Input type="text" placeholder="링크를 복사해주세요." />
            </Row>
            <Row>
                <Label>사진첨부</Label>
                <AttachBoxList>
                    <AttachBox>Upload</AttachBox>
                    <AttachBox>Upload</AttachBox>
                    <AttachBox>Upload</AttachBox>
                </AttachBoxList>
            </Row>
            <Row>
                <Label>메인 설정</Label>
                <RadioBox type="radio" id="youtube"/>
                <RadioBoxLabel htmlFor="youtube">유튜브</RadioBoxLabel>
                <RadioBox type="radio" id="photo"/>
                <RadioBoxLabel htmlFor="photo">사진</RadioBoxLabel>
            </Row>
            <ButtonBox>
                <MainButton>등록하기</MainButton>
            </ButtonBox>
        </Inner>
    );

};

export default PostForm;