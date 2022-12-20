import { Link } from "react-router-dom";

const ListItem = (props) => {
  const bookInfo = props.bookinfo;
  return (
    <li>
      <Link to={`/detail?seq=${bookInfo.seq}`}>
        <div>
          <p>{bookInfo.title}</p>
          <p>
            {bookInfo.autherName} | {bookInfo.publisherName} | {bookInfo.regDt}
          </p>
          <p>
            {bookInfo.discount} | {bookInfo.discountPrice} | {bookInfo.price} | {bookInfo.point}
          </p>
          <p>{bookInfo.textIntroduce}</p>
          <p>
            {bookInfo.rank} | {bookInfo.reivewCount}
          </p>
        </div>
      </Link>
    </li>
  );
};

export default ListItem;
