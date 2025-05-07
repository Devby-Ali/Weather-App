import { Suspense, useEffect } from "react";
import { useRoutes } from "react-router-dom";
import routes from "./routes";
import { WeatherProvider } from "./Contexts/WeatherContext";

const App = (): React.JSX.Element => {
  useEffect(() => {
    if (localStorage.theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const router = useRoutes(routes);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <WeatherProvider>{router}</WeatherProvider>
    </Suspense>
  );
};

export default App;
