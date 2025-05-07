import React, {
    useState,
    useEffect,
    ReactNode,
    createContext,
    useCallback,
  } from "react";
  import { getCurrentWeather } from "../Services/Axios/Requests/weatherService";
  import type { WeatherContextType } from "./WeatherContext.type";
  import { useTranslation } from "react-i18next";
  
  const WeatherContext = createContext<WeatherContextType>({
    city: "",
    setCity: () => {},
    weatherData: null,
    loading: false,
  });
  
  export const WeatherProvider = ({
    children,
  }: {
    children: ReactNode;
  }): React.JSX.Element => {
    const { i18n } = useTranslation();
    const [city, setCity] = useState("Tehran");
    const [weatherData, setWeatherData] = useState(null);
    const [loading, setLoading] = useState(false);
  
    const fetchWeather = useCallback(async () => {
      try {
        setLoading(true);
        const data = await getCurrentWeather(city);
        setWeatherData(data);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      } finally {
        setLoading(false);
      }
    }, [city, i18n.language]);
  
    useEffect(() => {
      fetchWeather();
    }, [fetchWeather]);
  
    return (
      <WeatherContext.Provider value={{ city, setCity, weatherData, loading }}>
        {children}
      </WeatherContext.Provider>
    );
  };
  
  export { WeatherContext };
  