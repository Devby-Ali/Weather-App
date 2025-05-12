import { useContext } from "react";
import { WeatherContext } from "../../Contexts/WeatherContext";
import { formatTemp, getFormattedDateTime } from "../../Utils/dataService";
import { useTranslation } from "react-i18next";
import { IoLocation } from "react-icons/io5";

const WeatherInfo = (): React.JSX.Element => {
  const { weatherData } = useContext(WeatherContext);

  const { dayName, fullDate, time, dayMonth } = getFormattedDateTime();

  const { t, i18n } = useTranslation();
  const isPersian = i18n.language === "fa";

  return (
    <section className="flex lg:w-1/2 xl:w-44/100 h-min justify-between px-6 pt-5 pb-4.5 shadow-custom text-darkText dark:text-lightText font-Roboto-regular">
      <div>
        <span className="flex-center w-max text-lg sm:text-2xl font-Inter-regular text-[#3D4852] bg-[#CDD9E0] rounded-4xl h-8 sm:h-10 px-3.5">
          <IoLocation className="-mx-1" />
          <span
            className={`text-sm sm:text-base px-3 ${isPersian && "mb-0.5"}`}
          >
            {weatherData.name}
          </span>
        </span>
        <div className="mt-3 sm:mt-3">
          <span className="text-2xl sm:text-[32px] font-bold"> {dayName}</span>
          <div
            className={`flex font-Roboto-light sm:font-Roboto-regular gap-x-2.5 sm:gap-x-5 ltr ${
              isPersian ? "text-sm sm:text-[15px] mt-1" : " text-xs sm:text-sm mt-0.5 sm:mt-0"
            }`}
          >
            <div className="flex-center gap-x-1">
              <span>{fullDate}</span>
              {isPersian && <span>{dayMonth}</span>}
            </div>

            <span>{time}</span>
          </div>
        </div>
        <div className={`mt-3 ${isPersian ? "sm:mt-[5.13px]" : "sm:mt-3"}`}>
          <div className="flex items-center ltr gap-x-1 sm:gap-x-2 w-min">
            <span className="text-2xl sm:text-[40px] font-bold">
              {formatTemp(weatherData.main.temp)}
            </span>
            <span className="inline-block w-2 sm:w-4 h-2 sm:h-4 rounded-full border-2 sm:border-[3px] border-darkText dark:border-lightText mb-4.5 sm:mr-1"></span>
            <span className="text-2xl sm:text-[40px]">C</span>
          </div>
          <div
            className={`flex text-xs sm:text-sm gap-x-3 sm:-mt-1 font-Roboto-light sm:font-Roboto-regular ${
              isPersian ? "text-sm sm:text-[15px]" : " text-xs sm:text-sm"
            }`}
          >
            <span>
              {isPersian ? "بیشینه" : "High"}:{" "}
              {formatTemp(weatherData.main.temp_max)}
            </span>
            <span>
              {isPersian ? "کمینه" : "Low"}:{" "}
              {formatTemp(weatherData.main.temp_min)}
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-end max-w-48 font-Inter-regular">
        <div className="sm:w-32">
          <img
            src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
            className="w-full h-full shadow-cloud"
            alt="Weather status"
          />
        </div>
        <div className=" flex flex-col">
          <span
            className={`text-center text-wrap ${
              isPersian ? "sm:text-xl" : "text-lg sm:text-2xl"
            }`}
          >
            {weatherData.weather[0].description}
          </span>
          <div
            className={`flex gap-x-1.5 mt-2.5 text-xs ltr ${
              isPersian ? "sm:text-shadow-md" : "sm:text-base"
            }`}
          >
            <span>{t("temperatureInfo.feels_like")}</span>
            <span>{formatTemp(weatherData.main.feels_like)}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeatherInfo;
