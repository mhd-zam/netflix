import axios from "axios";
import { apiBaseUrl } from "../constant/constant";
const instance = axios.create({
    baseURL: apiBaseUrl
});
  export default instance