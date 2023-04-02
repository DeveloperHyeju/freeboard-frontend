import RatingComponent from "@/src/components/commons/RatingComponent";
import * as style from "./boardCommentForm.styles";


const BoardCommentFormUI = ({onChangeWriter, onChangePassword, onChangeContents, onClickChangeRating, writer, password, rating, contents, setWriter, setContents, onClickCreateBoardComment, onClickUpdateBoardComment, isEdit, comment}) => {

    console.log(writer);

    return (
        <style.Wrap>
            <style.Info isEdit={isEdit}>
                <style.InfoInput type="text" value={isEdit ? comment?.writer : writer} placeholder="작성자" onChange={onChangeWriter} />
                <style.InfoInput type="password" value={password} placeholder="비밀번호" onChange={onChangePassword} />
                <style.StarBox><RatingComponent rating={rating}
                                                onClickChangeRating={onClickChangeRating}
                                                isRating={true} /></style.StarBox>
            </style.Info>
            <style.Contents>
                <style.ContentsInput type="text"
                                    value={isEdit ? setContents(comment?.contents) : contents}
                                    placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
                                    onChange={onChangeContents}
                                    defaultValue={comment?.contents}
                                    isEdit={isEdit} />
                <style.ButtonBox>
                    <style.WordCounter>{contents ? contents.length : "0"}/100</style.WordCounter>
                    {
                        isEdit ?
                        <style.StoreCommentButton onClick={onClickUpdateBoardComment} 
                                                isEdit={isEdit}>수정하기</style.StoreCommentButton> :
                        <style.StoreCommentButton onClick={onClickCreateBoardComment}>등록하기</style.StoreCommentButton>
                    }
                </style.ButtonBox>
            </style.Contents>
        </style.Wrap>
    );

};


export default BoardCommentFormUI;