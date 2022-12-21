import "../style/GoodInfo.css";
import "../style/TopButton.css";

import { Link } from "react-router-dom";

const Goodinfo = (props) => {
  // const[Auther,]

  const detailInfo = props.detailInfo;
  const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })}


  // const Auther = detailInfo.autherName

  // if(Auther.length >= 10){
  //   return Auther.substr(0,10)+"...";
  // }

  //  if(detailInfo.autherName.length >=10){
  //   detailInfo.autherName.substr(0, 6)

  //  }else{ "no" }

  return (
    <div className="container total ">
      <div className="title container">
        <div className="cover">

        {detailInfo.coverImageUri ?
          <img
            src={`http://haeji.mawani.kro.kr:8181/image/cover/${detailInfo.coverImageUri}`}
            //  onError={(event) => event.target.style.display = 'none'}
            className="booktitle container"
            alt="책표지"
          ></img> : ""}
        </div>

        <ul className="list-group info container">
          <div className="event container">
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
          <h2 className="titleinfo container">
            {detailInfo.title ? detailInfo.title : "No title"}
          </h2>
          <p className="minigray container">
            {detailInfo.autherName} |{" "}
            {detailInfo.publisherName
              ? detailInfo.publisherName
              : "No publisherName"}{" "}
            | {detailInfo.regDt}
          </p>
          <p className="discount">
            {detailInfo.discount ? detailInfo.discount : "No discount"}{"  "}
            <span className="discountprice">
              {detailInfo.discountPrice
                ? detailInfo.discountPrice
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                : "NO discount"}{"  "}
            </span>
            <span className="saleprice">
              {detailInfo.price
                ? detailInfo.price
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                : "NO price"}
            </span>
          </p>
          <div className="point">
            <span>적립</span>
            <span>{detailInfo.point ? detailInfo.point.toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",") : "no point"}p</span>
          </div>
          <div className="point">
            <span>배송정보</span>
            <span>
              {detailInfo.delivery ? detailInfo.delivery : "No delivery"}
            </span>
          </div>
          <div className="point">
            <span>리뷰평점</span>
            <span>{detailInfo.score ? detailInfo.score : "0"}</span>
          </div>
        </ul>
        <div></div>
      </div>

      <div className="container introdetail">
        {/* <img src={`http://haeji.mawani.kro.kr:8181/image/intro/${detailInfo.introImageUri}`} 
        // onError= {(event) => event.target.style.display = 'none'} 
         className="bookdetail container" 
         alt="상세설명" ></img> */}
        {detailInfo.introImageUri ? (
          <img
            src={`http://haeji.mawani.kro.kr:8181/image/intro/${detailInfo.introImageUri}`}
            // onError= {(event) => event.target.style.display = 'none'}
            className="bookdetail container"
            alt="상세설명"
          ></img>
        ) : (
          ""
        )}

        <p className="bookinfotitle container">책소개</p>
        <p className="bookinfo"> {detailInfo.textIntroduce}</p>
      </div>
      <div className="scroll__container">
<button id="top" onClick={scrollToTop} type="button" > Top</button>
</div>
    </div>
  );
};

export default Goodinfo;
