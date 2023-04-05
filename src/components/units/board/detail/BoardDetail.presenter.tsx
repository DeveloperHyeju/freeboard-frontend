import * as style from "./BaordDetail.styles";
import { setDate } from "@/src/commons/libraries/utils";
import { IBoardDetailUIProps } from "./BoardDetail.types";


const BoardDetailUI = ({data, onClickMoveToBoards, onClickMoveToBoardEdit}: IBoardDetailUIProps) => {

    return(
        <style.Wrap>
            <style.ContentsWrap>
                <style.Board>
                    <style.BoardHeader>
                        <style.Profile>
                            <style.ProfileIcon src="/icon/user_icon.png" alt="프로필 이미지" />
                            <style.ProfileInfo>
                                <style.ProfileName>{data?.fetchBoard?.writer}</style.ProfileName>
                                <style.ProfileDate>{setDate(data?.fetchBoard?.updatedAt)}</style.ProfileDate>
                            </style.ProfileInfo>
                        </style.Profile>
                        <style.Features>
                            <style.Link><img src="/icon/link_icon.png" alt="공유하기" /></style.Link>
                            <style.Location><img src="/icon/location_icon.png" alt="위치" /></style.Location>
                        </style.Features>
                    </style.BoardHeader>
                    <style.Contents>
                        <style.BoardTitle>{data?.fetchBoard?.title}</style.BoardTitle>
                        <style.BoardContents>{data?.fetchBoard?.contents}</style.BoardContents>
                    </style.Contents>
                    <style.LikeButtonBox>
                        <style.LikeButton><img src="/icon/like_icon.png" alt="좋아요" />{data?.fetchBoard?.likeCount}</style.LikeButton>
                        <style.DisLikeButton><img src="/icon/dislike_icon.png" alt="싫어요" />{data?.fetchBoard?.dislikeCount}</style.DisLikeButton>
                    </style.LikeButtonBox>
                </style.Board>
            </style.ContentsWrap>
            <style.BoardButtonBox>
                <style.BoardControlButton
                    onClick={onClickMoveToBoards}>
                    목록으로
                </style.BoardControlButton>
                <style.BoardControlButton
                    onClick={e => onClickMoveToBoardEdit(data?.fetchBoard?._id)}>
                    수정하기
                </style.BoardControlButton>
                <style.BoardControlButton>삭제하기</style.BoardControlButton>
            </style.BoardButtonBox>
        </style.Wrap>
    );

};


export default BoardDetailUI;