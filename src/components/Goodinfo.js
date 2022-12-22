import "../style/GoodInfo.css";
import "../style/TopButton.css";
import ConvertPrice from "../util/ConvertPrice";
import ReplaceDate from "../util/ReplaceDate";

const Goodinfo = (props) => {
  const detailInfo = props.detailInfo;
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="container px-4 total">
      <div className="row title">
        <div className="col cover">
          {detailInfo.coverImageUri ? (
            <img
              src={`http://haeji.mawani.kro.kr:8181/image/cover/${detailInfo.coverImageUri}`}
              className="booktitle"
              alt="책표지"
            ></img>
          ) : (
            ""
          )}
        </div>
        <ul className="col info">
          <div className="event">
            <button type="button" className="btn btn-outline-light w-11 p-1">
              이벤트
            </button>
            <button type="button" className="btn btn-outline-light w-11 p-1">
              사은품
            </button>
            <button type="button" className="btn btn-outline-light w-11 p-1">
              무료배송
            </button>
          </div>
          <div className="detail-bookinfo">
            <h2 className="titleinfo">{detailInfo.title ? detailInfo.title : "No title"}</h2>
            <p className="minigray">
              <span>
                {detailInfo.autherName} 저자(글)
                {detailInfo.translatorName ? " · " + detailInfo.translatorName + " 번역" : ""}
              </span>
              <span>
                {detailInfo.publisherName ? detailInfo.publisherName : "No publisherName"} ·{" "}
                {detailInfo.regDt ? ReplaceDate(detailInfo.regDt) : "0000.00.00"}
              </span>
            </p>
          </div>
          <p className="discount">
            {detailInfo.discount ? detailInfo.discount : "0"}
            {"  "}
            <span className="discountprice">
              {detailInfo.discountPrice ? ConvertPrice(detailInfo.discountPrice) : "0"}원{"  "}
            </span>
            <span className="saleprice">
              {detailInfo.price ? ConvertPrice(detailInfo.price) : "0"}원
            </span>
          </p>
          <div className="point">
            <span>적립</span>
            <span className="point-price">
              {detailInfo.point ? ConvertPrice(detailInfo.point) : "0"}p
            </span>
          </div>
          <div className="point">
            <span>배송정보</span>
            <span>{detailInfo.delivery ? detailInfo.delivery : "No delivery"}</span>
          </div>
          <div className="point">
            <span>리뷰평점</span>
            <span>
              <img className="clover-img" src={"/ico_clover.png"} />{" "}
              {detailInfo.score ? `${detailInfo.score} (${detailInfo.reivewCount})` : "0 (0)"}
            </span>
          </div>
        </ul>
      </div>
      <div className="container detail-menu">
        <p className="detail-menu-item">상품 정보</p>
      </div>
      <div className="introdetail">
        {detailInfo.introImageUri ? (
          <img
            src={`http://haeji.mawani.kro.kr:8181/image/intro/${detailInfo.introImageUri}`}
            // onError= {(event) => event.target.style.display = 'none'}
            className="bookdetail"
            alt="상세설명"
          ></img>
        ) : (
          ""
        )}
        <p className="bookinfotitle">책소개</p>
        <p className="bookinfo"> {detailInfo.textIntroduce}</p>
      </div>
      <div className="scroll__container">
        <button id="top" onClick={scrollToTop} type="button">
          Top
        </button>
      </div>
    </div>
  );
};

export default Goodinfo;
