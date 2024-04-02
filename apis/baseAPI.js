import axios from "axios";

const baseAPI = axios.create({
  // baseURL: "http://172.16.1.230:8000",
  baseURL: "https://ssps-7wxl.onrender.com",
  headers: {
    "Content-Type": "application/json",
  },
});

export default baseAPI;
