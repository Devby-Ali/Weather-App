import { Suspense, useEffect } from "react";
import { useRoutes } from "react-router-dom";
import routes from "./routes";

function App() {

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
      {router}
    </Suspense>
  );
}

export default App;
