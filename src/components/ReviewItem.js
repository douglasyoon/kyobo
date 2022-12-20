import "../style/review.css";

const ReviewItem = (props) => {
  const reviewData = props.reviewData;
  return (
    <li className="list-group-item review-item">
      <p className="review-info">
        {reviewData.reviewSroce}|{reviewData.memberId}|{reviewData.reviewDate}
      </p>
      <p className="review-content">{reviewData.reviewContent}</p>
    </li>
  );
};

export default ReviewItem;
