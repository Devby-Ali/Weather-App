import axios from "axios";
import errorHandler from "../ErrorHandler/ErrorHandler";

const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;

export const searchCities = async (query: string) => {
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/geo/1.0/direct`,
      {
        params: {
          q: query,
          limit: 5,
          appid: API_KEY,
        },
      }
    );
    return response.data;
  } catch (error) {
    errorHandler(error);
    throw error;
  }
};
