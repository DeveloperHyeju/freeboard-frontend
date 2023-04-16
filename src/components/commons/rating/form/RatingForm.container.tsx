import RatingFormUI from "./RatingForm.presenter";
import { MouseEvent, useEffect } from "react";
import { IRatingFormProps } from "./RatingForm.types";

const RatingForm = ({
  rating,
  setRating,
  isEdit,
  comment,
}: IRatingFormProps) => {
  useEffect(() => {
    if (!isEdit) return;
    if (!comment) return;
    setRating(comment.rating);
  }, []);

  const onClickScore = (e: MouseEvent<HTMLButtonElement>) => {
    setRating(Number(e.currentTarget.id));
  };

  return <RatingFormUI rating={rating} onClickScore={onClickScore} />;
};

export default RatingForm;
