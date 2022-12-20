const Goodinfo = (props) => {
  const detailInfo = props.detailInfo;
  return (
    <div>
      <p>{detailInfo.title}</p>
      <p>
        {detailInfo.autherName} | {detailInfo.publisherName} | {detailInfo.regDt}
      </p>
      <p>
        {detailInfo.discount} | {detailInfo.discountPrice} | {detailInfo.price}
      </p>
      <p>{detailInfo.point}</p>
      <p>{detailInfo.delivery}</p>
      <p>{detailInfo.score}</p>
    </div>
  );
};

export default Goodinfo;
