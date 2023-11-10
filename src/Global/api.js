import axios from "axios";

const baseUrl = "https://api.user.opaqueindustries.news";

const axiosInstance = axios.create({
  baseURL: baseUrl,
  headers: {
    "Content-Type": "application/json",
  },
});

export const get = (url) => {
  return axiosInstance.get(url);
};
