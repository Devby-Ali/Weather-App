import { useTranslation } from "react-i18next";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import WeatherChart from "../../Components/WeatherChart/WeatherChart";
import WeatherDetails from "../../Components/WeatherDetails/WeatherDetails";
import WeatherInfo from "../../Components/WeatherInfo/WeatherInfo";

const Index = (): React.JSX.Element => {
  const { i18n } = useTranslation();
  const isPersian = i18n.language === "fa";

  return (
    <>
      <Navbar />
      <div className="container mb-25 lg:mb-30 2xl:mb-22">
        <main
          className={`flex flex-col gap-y-5 lg:flex-row justify-between gap-x-8 2xl:gap-x-10 mt-7 2xl:mt-10 *:bg-stoneCard dark:*:bg-[#292F45] *:rounded-2xl ${isPersian ? "rtl" : "ltr"}`}
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
