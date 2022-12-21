import ReviewItem from "./ReviewItem";
import ReviewNoItem from "./ReviewNoItem";
import requests from "../api/request";
import instance from "../api/axios";
import Pagination from "react-js-pagination";
import { useEffect, useState } from "react";

const Review = (props) => {
  const [reviews, setReviews] = useState([]);
  const [reviewPage, setReviewPage] = useState(1);
  const [reviewPageInfo, setReviewPageInfo] = useState({});
  const fetchData = async () => {
    const params = {
      seq: props.seq,
      page: reviewPage - 1,
    };
    const resultReview = await instance.get(requests.fetchReview, { params });
    const { content, totalPages, totalElements, size } = resultReview.data.List
      ? resultReview.data.List
      : {};
    const reviewList = content ? content : "";
    const list =
      reviewList &&
      reviewList.map((item) => {
        return <ReviewItem key={item.reviewSeq} reviewData={item} />;
      });
    const pageInfo = { totalPages, totalElements, size };
    setReviews(list);
    setReviewPageInfo(pageInfo);
  };
  useEffect(() => {
    fetchData();
  }, [reviewPage]);
  const handlePageChange = (page) => {
    setReviewPage(page);
  };

  return (
    <div className="container review">
      <div className="container review-menu">
        <p className="review-menu-item">리뷰</p>
      </div>
      <div>
        <p className="review-rate-title">사용자 총점</p>
        <p className="review-rate">
          <span className="review-rate-green">{props.score ? props.score : "0"}</span>/10 (
          {props.count ? props.count : "0"})
        </p>
      </div>
      <ul className="list-group list-group-flush">{reviews ? reviews : <ReviewNoItem />}</ul>
      {reviews ? (
        <Pagination
          activePage={reviewPage}
          itemsCountPerPage={reviewPageInfo.size}
          totalItemsCount={parseInt(reviewPageInfo.totalElements)}
          pageRangeDisplayed={10}
          prevPageText={"‹"}
          nextPageText={"›"}
          onChange={handlePageChange}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default Review;
