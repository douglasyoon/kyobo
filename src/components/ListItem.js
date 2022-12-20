import { Link } from "react-router-dom";
import "../style/listitem.css";
const ListItem = (props) => {
  const bookInfo = props.bookinfo;
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
            {bookInfo.autherName} | {bookInfo.publisherName} | {bookInfo.regDt}
          </p>

          <div className="list-num">
            <p className="percent">{bookInfo.discount} </p>
            <p className="price"> {bookInfo.discountPrice}원 </p>
            <p className="dc-price"> {bookInfo.price}원 </p>
            <p className="point"> {bookInfo.point}p </p>
          </div>

          <span className="list-review">{bookInfo.textIntroduce}</span>

          {bookInfo.score ? (
            <div className="list-score">
              <img className="clover-img" src={"/ico_clover.png"} />
              <p className="clover-score"> {bookInfo.score}</p>
              <p className="clover-review">({bookInfo.reivewCount}개의 리뷰)</p>
            </div>
          ) : (
            ""
          )}
        </div>
        <div className="list-bt">
          <button className="list-info">세부 정보 보기</button>
        </div>
      </div>
    </li>
  );
};

export default ListItem;
