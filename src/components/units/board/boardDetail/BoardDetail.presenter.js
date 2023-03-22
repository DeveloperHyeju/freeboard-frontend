import * as style from "./BaordDetail.styles";
import userIcon from "../../../../../public/icon/user_icon.png";
import likeIcon from "../../../../../public/icon/like_icon.png";
import disLikeIcon from "../../../../../public/icon/dislike_icon.png";
import linkIcon from "../../../../../public/icon/link_icon.png";
import locationIcon from "../../../../../public/icon/location_icon.png";


const BoardDetailUI = ({data, onClickMoveToBoards, onClickMoveToBoardEdit}) => {

    return(
        <style.Wrap>
            <style.ContentsWrap>
                <style.Board>
                    <style.BoardHeader>
                        <style.Profile>
                            <style.ProfileIcon src={userIcon.src} alt="프로필 이미지" />
                            <style.ProfileInfo>
                                <style.ProfileName>{data?.fetchBoard.writer}</style.ProfileName>
                                <style.ProfileDate>Date : {data?.fetchBoard.updatedAt.slice(0, 10).replaceAll("-", ".")}</style.ProfileDate>
                            </style.ProfileInfo>
                        </style.Profile>
                        <style.Features>
                            <style.Link><img src={linkIcon.src} alt="공유하기" /></style.Link>
                            <style.Location><img src={locationIcon.src} alt="위치" /></style.Location>
                        </style.Features>
                    </style.BoardHeader>
                    <style.Contents>
                        <style.BoardTitle>{data?.fetchBoard.title}</style.BoardTitle>
                        <style.BoardContents>{data?.fetchBoard.contents}</style.BoardContents>
                    </style.Contents>
                    <style.LikeButtonBox>
                        <style.LikeButton><img src={likeIcon.src} alt="좋아요" />{data?.fetchBoard.likeCount}</style.LikeButton>
                        <style.DisLikeButton><img src={disLikeIcon.src} alt="싫어요" />{data?.fetchBoard.dislikeCount}</style.DisLikeButton>
                    </style.LikeButtonBox>
                </style.Board>
            </style.ContentsWrap>
            <style.BoardButtonBox>
                <style.BoardControlButton
                    onClick={onClickMoveToBoards}>
                    목록으로
                </style.BoardControlButton>
                <style.BoardControlButton
                    onClick={e => onClickMoveToBoardEdit(data?.fetchBoard._id)}>
                    수정하기
                </style.BoardControlButton>
                <style.BoardControlButton>삭제하기</style.BoardControlButton>
            </style.BoardButtonBox>
        </style.Wrap>
    );

};


export default BoardDetailUI;