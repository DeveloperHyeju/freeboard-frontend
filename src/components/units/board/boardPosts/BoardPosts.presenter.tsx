import { setDate } from "@/src/commons/libraries/utils";
import * as style from "./BoardPosts.styles";


const BoardPostsUI = ({data, onClickMoveToBoardDetail, onClickMoveToBoardWrite}) => {

    const boardPosts = data?.fetchBoards.map((board, index) => {
        return(
            <style.Row key={board._id}>
                <style.PostBasic>
                    {String(board._id).slice(20).toUpperCase()}
                </style.PostBasic>
                <style.LinkPostTitle 
                    onClick={e => onClickMoveToBoardDetail(board._id)}>
                    {board.title}
                </style.LinkPostTitle>
                <style.PostBasic>{board.writer}</style.PostBasic>
                <style.PostBasic>{setDate(board.createdAt)}</style.PostBasic>
            </style.Row>
        );
    });


    return(
        <style.Wrap>
            <style.ContentsWrap>
                <style.BoardPosts>
                    <style.BoardPostsHeader>
                        <style.Row>
                            <style.PostBasic>번호</style.PostBasic>
                            <style.PostTitle>제목</style.PostTitle>
                            <style.PostBasic>작성자</style.PostBasic>
                            <style.PostBasic>날짜</style.PostBasic>
                        </style.Row>
                    </style.BoardPostsHeader>
                    <style.BoardPostsBody>
                        {boardPosts}
                    </style.BoardPostsBody>
                </style.BoardPosts>
                <style.ButtonBox>
                    <style.NewBoardButton
                        onClick={onClickMoveToBoardWrite}>
                        게시물 등록하기
                    </style.NewBoardButton>
                </style.ButtonBox>
            </style.ContentsWrap>
        </style.Wrap>
    );

};


export default BoardPostsUI;