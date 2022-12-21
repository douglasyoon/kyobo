import { useEffect, useState } from "react";
import requests from "../api/request";
import instance from "../api/axios";
import ListItem from "./ListItem";
import Pagination from "react-js-pagination";

const List = () => {
  const [bookList, setBookList] = useState([]);
  const [listPage, setListPage] = useState(1);
  const [listPageInfo, setListPageInfo] = useState({});
  const fetchData = async () => {
    const params = {
      page: listPage - 1,
    };
    const resultList = await instance.get(requests.fetchList, { params });
    const item = resultList.data.list.content;

    const { totalPages, totalElements, size } = resultList.data.list;
    setBookList(item);
    setListPageInfo({ totalPages, totalElements, size });
  };
  useEffect(() => {
    fetchData();
  }, [listPage]);
  const list = bookList.map((item) => {
    return <ListItem key={item.seq} bookinfo={item} />;
  });
  const handlePageChange = (page) => {
    setListPage(page);
  };

  return (
    <div>
      <ul>{list}</ul>
      {
        <Pagination
          activePage={listPage}
          itemsCountPerPage={listPageInfo.size}
          totalItemsCount={parseInt(listPageInfo.totalElements)}
          pageRangeDisplayed={10}
          prevPageText={"‹"}
          nextPageText={"›"}
          onChange={handlePageChange}
        />
      }
    </div>
  );
};

export default List;
