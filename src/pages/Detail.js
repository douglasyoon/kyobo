import Review from "../components/Review";
import Goodinfo from "../components/Goodinfo";
import { useEffect, useState } from "react";
import instance from "../api/axios";
import requests from "../api/request";
import { useLocation } from "react-router";
const Detail = () => {
  const location = useLocation();
  const paramList = new URLSearchParams(location.search);
  const seqValue = paramList.get("seq");
  const [detailInfo, setDetailInfo] = useState([]);
  const [review, setReview] = useState([]);
  const fetchData = async () => {
    const params = {
      seq: seqValue,
    };
    const resultDetail = await instance.get(requests.fetchDetail, { params });
    const { bookInfo, review } = resultDetail.data;
    setDetailInfo(bookInfo);
    setReview(review.List ? review.List : "");
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      {<Goodinfo detailInfo={detailInfo} />}
      {<Review review={review} score={detailInfo.score} count={detailInfo.reivewCount} />}
    </div>
  );
};
export default Detail;