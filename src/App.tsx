import { Suspense, useEffect } from "react";
import { useRoutes } from "react-router-dom";
import routes from "./routes";
import { WeatherProvider } from "./Contexts/WeatherContext";
import { useTranslation } from "react-i18next";

const App = (): React.JSX.Element => {

  const { i18n } = useTranslation()
  const isPersian = i18n.language === "fa"
  
  useEffect(() => {
    if (localStorage.theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  useEffect(() => {
  document.documentElement.setAttribute('dir', isPersian ? 'rtl' : 'ltr');
}, [isPersian]);

  const router = useRoutes(routes);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <WeatherProvider>{router}</WeatherProvider>
    </Suspense>
  );
};

export default App;
