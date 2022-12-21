import "../style/review.css";

const ReviewItem = (props) => {
  const reviewData = props.reviewData;
  const star = [...Array(reviewData.reviewSroce)].map((n, i) => <span key={i}>&#9733;</span>);

  return (
    <li className="list-group-item review-item">
      <p className="review-info">
        <span>{star}</span>
        <span>{reviewData.memberId}</span> <span>{reviewData.reviewDate}</span>
      </p>
      <p className="review-content">{reviewData.reviewContent}</p>
    </li>
  );
};

export default ReviewItem;
