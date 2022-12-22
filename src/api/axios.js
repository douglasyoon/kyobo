import axios from "axios";
const instance = axios.create({
  baseURL: "http://haeji.mawani.kro.kr:8181",
});
export default instance;
