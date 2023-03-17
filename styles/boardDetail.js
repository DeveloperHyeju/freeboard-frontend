import styled from "@emotion/styled";
import linkIcon from "../public/icon/link_icon.png";
import locationIcon from "../public/icon/location_icon.png";

export const Wrap = styled.div({
    padding: "8rem",
    display: "flex",
    justifyContent: "center",
});

export const ContentsWrap = styled.div({
    display: "flex",
    maxWidth: "120rem",
    flex: "1 1 auto",
    boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.2)",
});

export const Board = styled.form({
    width: "100%",
    padding: "8rem 10.2rem",
    display: "flex",
    flexDirection: "column",
    gap: "8rem",
});

export const BoardHeader = styled.div({
    paddingBottom: "2rem",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottom: "1px solid #bdbdbd",
});

export const Profile = styled.div({
    display: "flex",
    gap: "1.6rem",
    alignItems: "center",
});

export const ProfileIcon = styled.img({
    width: "5.6rem",
    height: "5.6rem",
    padding: ".8rem",
});

export const ProfileInfo = styled.div({
    display: "flex",
    flexDirection: "column",
});

export const ProfileName = styled.p({
    fontSize: "2.4rem",
    fontWeight: "500"
});

export const ProfileDate = styled.span({
    color: "#828282",
});

export const Features = styled.div({
    display: "flex",
    gap: "2rem",
});

export const Link = styled.a({
    width: "3.2rem",
    height: "3.2rem",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
});

export const Location = styled.button({
    width: "3.2rem",
    height: "3.2rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
});

export const Contents = styled.div({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "4rem",
});

export const BoardTitle = styled.h2({
    width: "100%",
    fontSize: "3.6rem",
    fontWeight: "700",
});

export const BoardImage = styled.img({
    maxWidth: "100%",
    flex: "1 1 auto",
});

export const BoardContents = styled.pre({
    width: "100%",
});

export const BoardVideo = styled.img({
    margin: "8rem 0",
    maxWidth: "100%",
    flex: "1 1 auto",
});

export const ButtonBox = styled.div({
    display: "flex",
    gap: "4rem",
    justifyContent: "center",
});

export const LikeButton = styled.button({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    color: "#ffd600"
});

export const DisLikeButton = styled.button({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    color: "#828282"
});