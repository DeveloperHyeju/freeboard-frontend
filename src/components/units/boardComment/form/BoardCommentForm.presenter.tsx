import * as style from "./BoardCommentForm.styles";
import { IBoardCommentFormUIProps } from "./BoardCommentForm.types";


const BoardCommentFormUI = ({onChangeWriter, onChangePassword, onChangeContents, onClickCreateBoardComment, onClickUpdateBoardComment, contents, isEdit, comment}: IBoardCommentFormUIProps) => {


    return (
        <style.Wrap>
            <style.Info isEdit={isEdit}>
                <style.InfoInput type="text" placeholder="작성자" onChange={onChangeWriter} defaultValue={comment?.writer || ""} />
                <style.InfoInput type="password" placeholder="비밀번호" onChange={onChangePassword} />
            </style.Info>
            <style.Contents>
                <style.ContentsInput placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
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