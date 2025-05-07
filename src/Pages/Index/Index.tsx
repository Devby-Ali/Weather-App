import Navbar from "../../Components/Navbar/Navbar";
import WeatherInfo from "../../Components/WeatherInfo/WeatherInfo";

const Index = (): React.JSX.Element => {
  return (
    <>
      <Navbar />
      <div className="container">
      <main className="flex flex-col gap-y-5 lg:flex-row justify-between gap-x-10 mt-7 2xl:mt-10 *:bg-stoneCard dark:*:bg-[#292F45] *:rounded-3xl">
        <WeatherInfo />
        {/* <TemperatureChart /> */}
      </main>
        {/* <WeatherDetails /> */}
      </div>
    </>
  );
};

export default Index;
