import styled from "@emotion/styled";


const StarImg = styled.img({},({isRating}) => ({
    cursor: isRating ? "pointer" : "default",
}));

const scoreList = [1, 2, 3, 4, 5];

const RatingComponent = ({rating, onClickChangeRating=f=>f, isRating=false}) => {

    const ratingScore = scoreList.map((score) => {
        if (score <= rating) {
            return <StarImg src="/icon/active_star_icon.png" alt="별점" onClick={e => onClickChangeRating(score)} key={score} isRating={isRating} />;
        } else {
            return <StarImg src="/icon/star_icon.png" alt="별점" onClick={e => onClickChangeRating(score)} key={score} isRating={isRating} />;
        }
    });

    return ratingScore;

};


export default RatingComponent;