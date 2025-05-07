import { useContext } from "react";
import { useTranslation } from "react-i18next";
import { WeatherContext } from "../../Contexts/WeatherContext";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { toPersianNumbers } from "../../Utils/dataService";

const WeatherCards = [
    { id: 2, img: "/images/svgs/image7.svg", day: "Mon", Temp: "31" },
    { id: 3, img: "/images/svgs/image8.svg", day: "Tue", Temp: "33" },
    { id: 4, img: "/images/svgs/image8.svg", day: "Wed", Temp: "35" },
    { id: 5, img: "/images/svgs/Rain-cloud.svg", day: "Thu", Temp: "21" },
    { id: 6, img: "/images/svgs/storm.svg", day: "Fri", Temp: "25" },
    { id: 7, img: "/images/svgs/Rain-cloud.svg", day: "Sat", Temp: "28" },
    { id: 8, img: "/images/svgs/image8.svg", day: "Sun", Temp: "34" },
    { id: 9, img: "/images/svgs/storm.svg", day: "Mon", Temp: "30" },
    { id: 10, img: "/images/svgs/Rain-cloud.svg", day: "Tue", Temp: "27" },
    { id: 11, img: "/images/svgs/storm.svg", day: "Wed", Temp: "29" },
    { id: 12, img: "/images/svgs/image7.svg", day: "Thu", Temp: "32" },
    { id: 13, img: "/images/svgs/image8.svg", day: "Fri", Temp: "31" },
    { id: 14, img: "/images/svgs/Rain-cloud.svg", day: "Sat", Temp: "28" },
  ];
  
  const WeatherDetails = (): React.JSX.Element => {
    const breakpoints = {
      1536: {
        slidesPerView: 11,
        spaceBetween: 10,
      },
      1280: {
        slidesPerView: 4,
        spaceBetween: 15,
      },
      780: {
        slidesPerView: 5,
        spaceBetween: 15,
      },
      640: {
        slidesPerView: 4,
        spaceBetween: 15,
      },
      500: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
      420: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      320: {
        slidesPerView: 1,
        spaceBetween: 15,
      },
    };
  
    const { t, i18n } = useTranslation();
  
    const isPersian = i18n.language === "fa";
  
    const { weatherData, loading } = useContext(WeatherContext);
    console.log(weatherData);
    if (loading) return <div>در حال بارگذاری...</div>;
  
    if (!weatherData) return <div>اطلاعات آب و هوا در دسترس نیست</div>;
  
    return (
      <section
        className={`flex flex-col justify-between h-82 lg:h-[381px] mt-5 lg:mt-7 pb-[26px] bg-stoneCard dark:bg-[#292F45] rounded-3xl text-darkText dark:text-lightText font-Inter-regular shadow-weatherDetails ${
          isPersian ? "pr-4 lg:pr-5 pt-6" : "pl-4 lg:pl-6.5 pt-5.5"
        }`}
      >
        <h3
          className={`font-Inter-regular px-3 sm:font-Inter-semiBlod text-sm ${
            isPersian
              ? "sm:text-xl lg:text-[26px] tracking-wide lg:px-5"
              : "sm:text-lg lg:text-2xl lg:px-0.5"
          }`}
        >
          {t("weatherDetails.2_weeks_forecast")}
        </h3>
  
        <Swiper
          breakpoints={breakpoints}
          slidesPerView={11}
          spaceBetween={15}
          navigation={false}
          pagination={{ clickable: true }}
          className={`${isPersian ? "!pt-7" : "!pt-8.5"}`}
          touch={{
            grabCursor: true,
            enabled: true,
          }}
        >
          <SwiperSlide>
            <div className="flex items-center flex-col h-53 lg:h-[266px] w-22 lg:w-26 lg:mx-px pt-6 lg:pt-11 bg-[#CDD9E0] dark:bg-[#3F4861] rounded-3xl">
              <h2 className="text-sm px-2">{t("weatherDetails.today")}</h2>
              <span className="w-16 h-0.5 bg-gradient-to-r from-[#36363600] via-[#7E7E7E] to-[#36363600] rounded-full mt-[11px]"></span>
  
              <div className="size-18 lg:size-24 flex-center mt-4.5">
                <img
                  src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
                  className="w-full h-full"
                  alt="Weather status"
                />
              </div>
              <div className="flex items-end ltr">
                  <span className="text-lg mt-1.5">
                    {isPersian ? toPersianNumbers(Math.round(weatherData.main.temp)) : Math.round(weatherData.main.temp)}
                  </span>
                  <span className="inline-block w-[5px] h-[5px] rounded-full border border-darkText dark:border-lightText mb-3.5 mx-[1px]"></span>
                  <span className="mb-0.5">C</span>
                </div>
            </div>
          </SwiperSlide>
  
          {WeatherCards.map((card) => (
            <SwiperSlide>
              <div
                key={card.id}
                className="flex items-center flex-col h-53 lg:h-[266px] w-22 lg:w-26 lg:mx-px pt-6 lg:pt-11 bg-[#CDD9E0] dark:bg-[#3F4861] rounded-3xl"
              >
                <h2 className="text-sm px-2">{t(`week.${card.day}`)}</h2>
                <span className="w-16 h-0.5 bg-gradient-to-r from-[#36363600] via-[#7E7E7E] to-[#36363600] rounded-full mt-[11px]"></span>
  
                <div className="size-12 lg:size-17.5 flex-center mt-6.5">
                  <img src={card.img} alt="" />
                </div>
                <div className="flex items-end ltr">
                  <span className="text-lg mt-5.5">
                    {isPersian ? toPersianNumbers(card.Temp) : card.Temp}
                  </span>
                  <span className="inline-block w-[5px] h-[5px] rounded-full border border-darkText dark:border-lightText mb-3.5 mx-[1px]"></span>
                  <span className="mb-0.5">C</span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    );
  };
  
  export default WeatherDetails;