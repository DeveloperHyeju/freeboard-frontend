import { IRatingFormUIProps } from "./RatingForm.types";

const RatingFormUI = ({ rating, onClickScore }: IRatingFormUIProps) => {
  const scoreList = new Array(5).fill(1).map((_, index) => {
    if (rating < index + 1)
      return (
        <button key={index} id={String(index + 1)} onClick={onClickScore}>
          <img src="/icon/star_icon.png" alt="별점" />
        </button>
      );

    return (
      <button key={index} id={String(index + 1)} onClick={onClickScore}>
        <img src="/icon/active_star_icon.png" alt="별점" />
      </button>
    );
  });

  return <div>{scoreList}</div>;
};

export default RatingFormUI;
