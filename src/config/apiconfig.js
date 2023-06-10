import axios from "axios";

const Axios = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: false,
});
Axios.interceptors.response.use(
  (res) => {
    console.log("in interceptor", res);
    return res.data;
  },
  (err) => {
    console.log(err, err.error);
    return "Something went wrong";
  }
);

export default Axios;
