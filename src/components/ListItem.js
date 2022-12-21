import { Link } from "react-router-dom";
import ConvertPrice from "../util/ConvertPrice";

import "../style/TopButton.css";
const ListItem = (props) => {
  const bookInfo = props.bookinfo;
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  // 작가 이름 처리
  let authorName = "";
  if (bookInfo.autherName.includes(",")) {
    const [firstAuthorName] = bookInfo.autherName.split(",");
    authorName = firstAuthorName + " 외";
  } else {
    authorName = bookInfo.autherName;
  }
  return (
    <li>
      <div className="list-container">
        <Link to={`/detail?seq=${bookInfo.seq}`}>
          <img
            className="list-img"
            src={`http://haeji.mawani.kro.kr:8181/image/cover/${bookInfo.coverImageUri}`}
          />
        </Link>

        <div className="list-txtbox">
          <p className="rank-box"> {bookInfo.rank} </p>
          <p className="title">
            {" "}
            <Link to={`/detail?seq=${bookInfo.seq}`}>{bookInfo.title}</Link>
          </p>
          <p className="author">
            {authorName} · {bookInfo.publisherName} · {bookInfo.regDt}
          </p>

          <div className="list-num">
            <p className="percent">{bookInfo.discount} </p>
            <p className="price">
              {" "}
              {bookInfo.discountPrice
                ? ConvertPrice(bookInfo.discountPrice)
                : "no price"}
              원{" "}
            </p>
            <p className="dc-price">
              {" "}
              {ConvertPrice(bookInfo.price)}원{" "}
            </p>
            <p className="point"> {bookInfo.point ? ConvertPrice(bookInfo.point) : "0"}p </p>
          </div>

          <span className="list-review">{bookInfo.textIntroduce}</span>

          <div className="list-score">
            <img className="clover-img" src={"/ico_clover.png"} />
            <p className="clover-score"> {bookInfo.score ? bookInfo.score : "0"}</p>
            <p className="clover-review">
              ({bookInfo.reivewCount ? bookInfo.reivewCount : "0"}개의 리뷰)
            </p>
          </div>
        </div>
        <div className="list-bt">
          <Link to={`/detail?seq=${bookInfo.seq}`}>
            <button className="list-info">세부 정보 보기</button>
          </Link>
        </div>
      </div>
      <div className="scroll__container">
        <button id="top" onClick={scrollToTop} type="button">
          {" "}
          Top
        </button>
      </div>
    </li>
  );
};

export default ListItem;
