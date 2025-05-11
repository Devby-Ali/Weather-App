import { Suspense, useEffect, useLayoutEffect } from "react";
import { useRoutes } from "react-router-dom";
import routes from "./routes";
import { WeatherProvider } from "./Contexts/WeatherContext";
import { useTranslation } from "react-i18next";

const App = (): React.JSX.Element => {

  const { t, i18n } = useTranslation();


useLayoutEffect(() => {
  document.documentElement.dir = t('dir');
  document.documentElement.lang = i18n.language;
}, [i18n.language, t])

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
