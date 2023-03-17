import * as style from "./BaordDetail.styles";
import userIcon from "../../../../../public/icon/user_icon.png";
import boardImage from "../../../../../public/board_img.jpg";
import boardVideo from "../../../../../public/board_video.jpg";
import likeIcon from "../../../../../public/icon/like_icon.png";
import disLikeIcon from "../../../../../public/icon/dislike_icon.png";
import linkIcon from "../../../../../public/icon/link_icon.png";
import locationIcon from "../../../../../public/icon/location_icon.png";


const BoardDetailUI = ({data}) => {

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
                        <style.BoardImage src={boardImage.src} alt="게시글 이미지"/>
                        <style.BoardContents>{data?.fetchBoard.contents}</style.BoardContents>
                        <style.BoardVideo src={boardVideo.src} alt="영상" />
                    </style.Contents>
                    <style.ButtonBox>
                        <style.LikeButton><img src={likeIcon.src} alt="좋아요" />{data?.fetchBoard.likeCount}</style.LikeButton>
                        <style.DisLikeButton><img src={disLikeIcon.src} alt="싫어요" />{data?.fetchBoard.dislikeCount}</style.DisLikeButton>
                    </style.ButtonBox>
                </style.Board>
            </style.ContentsWrap>
        </style.Wrap>
    );

};


export default BoardDetailUI;