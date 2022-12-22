import ReplaceDate from "../util/ReplaceDate";

const ReviewItem = (props) => {
  const reviewData = props.reviewData;
  const star = [...Array(reviewData.reviewSroce)].map((n, i) => (
    <span key={i}>
      <img className="clover-img" src={"/ico_clover.png"} />
    </span>
  ));
  const [reviewDate, reviewTime] = reviewData.reviewDate.split(" ");
  return (
    <li className="list-group-item review-item">
      <p className="review-info">
        <span>{star}</span>
        <span>{reviewData.memberId ? reviewData.memberId : "ID"}</span>{" "}
        <span>{reviewDate ? ReplaceDate(reviewDate) : "0000.00.00"}</span>
      </p>
      <p className="review-content">{reviewData.reviewContent ? reviewData.reviewContent : ""}</p>
    </li>
  );
};

export default ReviewItem;
