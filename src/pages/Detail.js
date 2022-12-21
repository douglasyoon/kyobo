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
  const fetchData = async () => {
    const params = {
      seq: seqValue,
    };
    const resultDetail = await instance.get(requests.fetchDetail, { params });
    const { bookInfo } = resultDetail.data;
    setDetailInfo(bookInfo);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      {<Goodinfo detailInfo={detailInfo} />}
      {<Review seq={seqValue} score={detailInfo.score} count={detailInfo.reivewCount} />}
    </div>
  );
};
export default Detail;
