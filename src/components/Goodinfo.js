import "../style/GoodInfo.css";
import { Link } from "react-router-dom";


const Goodinfo = (props) => {

  
  const detailInfo = props.detailInfo;
 
//  if(detailInfo.autherName.length >=10){ 
//   detailInfo.autherName.substr(0, 6) 


//  }else{ "no" }
 
 


  
  return (
    <div className="total">
      <div className="title">
      
      <div>
        
          <img src={`http://haeji.mawani.kro.kr:8181/image/cover/${detailInfo.coverImageUri}`} className="BookTitle" alt="책표지"></img>
        </div>
        

        <ul className="info">
          <div className="Event">
          <button type="button" className="btn btn-outline-light w-11 p-1">이벤트</button>
          <button type="button" className="btn btn-outline-light w-11 p-1">사은품</button>
          <button type="button" className="btn btn-outline-light w-11 p-1">무료배송</button>
          </div>
      <h2 className="titleInfo">{detailInfo.title ? detailInfo.title: "No title"}</h2>
      <p className="MiniGray">
       {detailInfo.autherName } | {detailInfo.publisherName ? detailInfo.publisherName: "No publisherName"} | {detailInfo.regDt}
      </p>
      <p className="discount">
        {detailInfo.discount ? detailInfo.discount: "No discount"}  <span className="DiscountPrice">{detailInfo.discountPrice ? detailInfo.discountPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : "NO discount"}</span>
        <span className="SalePrice">{detailInfo.price ? detailInfo.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : "NO price"}</span>
      </p>
      <p>적립<span className="point">{detailInfo.point}p</span></p>
      <p>배송정보<span className="deliveryinfo">{detailInfo.delivery ? detailInfo.delivery: "No delivery"}</span></p>
      <p>리뷰평점<span className="Review">{detailInfo.score ? detailInfo.score : "0"  }</span></p>
      
      </ul>
      <div>
      
      </div>
      </div>
      
      
  

      <div className="introdetail">
        
        <img src={`http://haeji.mawani.kro.kr:8181/image/intro/${detailInfo.introImageUri}`} className="BookDetail" alt="상세페이지"></img>
       
      </div>
      
    </div>
  );
};

export default Goodinfo;
