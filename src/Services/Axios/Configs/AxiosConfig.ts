import axios from "axios";
import errorHandler from "../ErrorHandler/ErrorHandler";

const axiosInstance = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5",
  timeout: 1000,
});

axiosInstance.interceptors.request.use(
    (config) => config,
    (error) => {
        errorHandler(error)
        return Promise.reject(error);
    }
)

axiosInstance .interceptors.response.use(
    (response) => response,
    (error) => {
        errorHandler(error)
        return Promise.reject(error)
    }
)

export default axiosInstance;
