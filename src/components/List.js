import { useEffect, useState } from "react";
import requests from "../api/request";
import instance from "../api/axios";
import ListItem from "./ListItem";
const List = () => {
  const [bookList, setBookList] = useState([]);
  const fetchData = async () => {
    const resultList = await instance.get(requests.fetchList);
    const item = resultList.data.list.content;
    console.log(item);
    setBookList(item);
  };
  useEffect(() => {
    fetchData();
  }, []);
  const list = bookList.map((item) => {
    return <ListItem key={item.seq} bookinfo={item} />;
  });
  return <ul>{list}</ul>;
};

export default List;
