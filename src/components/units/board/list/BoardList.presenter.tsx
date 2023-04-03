import { setDate } from "@/src/commons/libraries/utils";
import * as style from "./BoardList.styles";


const BoardListUI = ({data, onClickMoveToBoardDetail, onClickMoveToBoardCreate}) => {

    const boardPosts = data?.fetchBoards.map((board) => {
        return(
            <style.Row key={board._id}>
                <style.BoardListItemBasic>
                    {String(board._id).slice(20).toUpperCase()}
                </style.BoardListItemBasic>
                <style.BoardListItemLinkTitle 
                    onClick={e => onClickMoveToBoardDetail(board._id)}>
                    {board.title}
                </style.BoardListItemLinkTitle>
                <style.BoardListItemBasic>{board.writer}</style.BoardListItemBasic>
                <style.BoardListItemBasic>{setDate(board.createdAt)}</style.BoardListItemBasic>
            </style.Row>
        );
    });


    return(
        <style.Wrap>
            <style.ContentsWrap>
                <style.BoardList>
                    <style.BoardListHeader>
                        <style.Row>
                            <style.BoardListItemBasic>번호</style.BoardListItemBasic>
                            <style.BoarListItemTitle>제목</style.BoarListItemTitle>
                            <style.BoardListItemBasic>작성자</style.BoardListItemBasic>
                            <style.BoardListItemBasic>날짜</style.BoardListItemBasic>
                        </style.Row>
                    </style.BoardListHeader>
                    <style.BoardListBody>
                        {boardPosts}
                    </style.BoardListBody>
                </style.BoardList>
                <style.ButtonBox>
                    <style.CreateBoardButton
                        onClick={onClickMoveToBoardCreate}>
                        게시물 등록하기
                    </style.CreateBoardButton>
                </style.ButtonBox>
            </style.ContentsWrap>
        </style.Wrap>
    );

};


export default BoardListUI;