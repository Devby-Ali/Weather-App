interface WeatherContextType {
    city: string;
    setCity: React.Dispatch<React.SetStateAction<string>>;
    weatherData: any;
    loading: boolean;
  }
  
  export type { WeatherContextType }