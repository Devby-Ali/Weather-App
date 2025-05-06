import axios from 'axios';
import errorHandler from '../ErrorHandler/ErrorHandler';
import REACT_APP_OPENWEATHER_API_KEY from '../../../../config';

const API_KEY = REACT_APP_OPENWEATHER_API_KEY

export const searchCities = async (query) => {
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/geo/1.0/direct`,
      {
        params: {
          q: query,
          limit: 5,
          appid: API_KEY
        }
      }
    );
    return response.data;
  } catch (error) {
    errorHandler(error);
    throw error;
  }
};