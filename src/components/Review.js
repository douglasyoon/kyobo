import ReviewItem from "./ReviewItem";
import { useEffect, useState } from "react";

const Review = (props) => {
  const review = props.review;
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    const list =
      review.content &&
      review.content.map((item) => {
        return <ReviewItem key={item.reviewSeq} reviewData={item} />;
      });
    setReviews(list);
  }, [review]);
  return (
    <div className="container">
      <div className="container">
        <p className="review-rate-title">사용자 총점</p>
        <p className="review-rate">
          <span className="review-rate-green">{props.score ? props.score : "0"}</span>/5 (
          {props.count ? props.count : "0"})
        </p>
      </div>
      <ul className="list-group list-group-flush">{reviews}</ul>
    </div>
  );
};

export default Review;
