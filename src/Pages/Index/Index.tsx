import { useTranslation } from "react-i18next";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import WeatherChart from "../../Components/WeatherChart/WeatherChart";
import WeatherDetails from "../../Components/WeatherDetails/WeatherDetails";
import WeatherInfo from "../../Components/WeatherInfo/WeatherInfo";
import { useContext } from "react";
import { WeatherContext } from "../../Contexts/WeatherContext";

const Index = (): React.JSX.Element => {
  const { weatherData, loading } = useContext(WeatherContext);

  const { t, i18n } = useTranslation();
  const isPersian = i18n.language === "fa";

  if (loading)
    return (
      <>
        <Navbar />
        <section className="container h-[90vh] rounded-2xl">
          <div className="flex-center">
            <span className="bg-sky-400/40 dark:bg-sky-300/30 mt-15 p-4 rounded-lg text-darkText dark:text-lightText text-sm xl:text-base w-7/10 text-center">
              {t("loading")}
            </span>
          </div>
        </section>
        <Footer />
      </>
    );

  if (!weatherData)
    return (
      <>
        <Navbar />
        <section className="container h-[90vh] rounded-2xl">
          <div className="flex-center">
            <span className="bg-amber-400/40 dark:bg-amber-300/30 mt-15 p-4 rounded-lg text-darkText dark:text-lightText text-sm xl:text-base w-7/10 text-center">
              {t("connect_error")}
            </span>
          </div>
        </section>
        <Footer />
      </>
    );

  return (
    <>
      <Navbar />
      <div className="container mb-25 lg:mb-30 2xl:mb-22">
        <main
          className={`flex flex-col gap-y-5 lg:flex-row justify-between gap-x-8 2xl:gap-x-10 mt-7 2xl:mt-10 *:bg-stoneCard dark:*:bg-[#292F45] *:rounded-2xl ${
            isPersian ? "rtl" : "ltr"
          }`}
        >
          <WeatherInfo />
          <WeatherChart />
        </main>
        <WeatherDetails />
      </div>
      <Footer />
    </>
  );
};

export default Index;
