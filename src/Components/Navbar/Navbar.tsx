import { useContext, useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { searchCities } from "../../Services/Axios/Requests/cityService";
import { Link } from "react-router-dom";
import type { WeatherContextType } from "../../Contexts/WeatherContext.type";
import { WeatherContext } from "../../Contexts/WeatherContext";
import { IoSettingsOutline } from "react-icons/io5";
import { RxExit } from "react-icons/rx";
import { IoMoonOutline } from "react-icons/io5";
import { IoSunnyOutline } from "react-icons/io5";
import { IoMdArrowDropdown } from "react-icons/io";
import { HiX } from "react-icons/hi";

const Navbar = (): React.JSX.Element => {
  const [openSetting, setOpenSetting] = useState<boolean>(false);
  const [showSuggestions, setShowSuggestions] = useState<boolean>(false);
  const [, setDark] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [suggestions, setSuggestions] = useState<City[]>([]);

  const { t, i18n } = useTranslation();
  const isPersian = i18n.language === "fa";

  const { setCity } = useContext<WeatherContextType>(WeatherContext);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const settingsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(async () => {
      if (searchQuery.length > 2) {
        const results = await searchCities(searchQuery);
        setSuggestions(results);
        setShowSuggestions(true);
      }
    }, 300);

    return () => clearTimeout(timer);
  }, [searchQuery]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(e.target as Node)
      ) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const handleClickOutsideSettings = (e: MouseEvent) => {
      if (
        settingsRef.current &&
        !settingsRef.current.contains(e.target as Node)
      ) {
        setOpenSetting(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutsideSettings);
    return () =>
      document.removeEventListener("mousedown", handleClickOutsideSettings);
  }, []);

  interface City {
    name: string;
    country: string;
    lat: number;
    lon: number;
  }

  const handleSelectCity = (selectedCity: City): void => {
    setCity(selectedCity.name);
    setSearchQuery(selectedCity.name);
    setShowSuggestions(false);
  };

  const darkModeHandler = (): void => {
    setDark(true);
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
  };

  const lightModeHandler = (): void => {
    setDark(false);
    document.documentElement.classList.remove("dark");
    localStorage.theme = "light";
  };

  return (
    <>
      <header className={`relative flex justify-between h-18 2xl:h-20 bg-lightPrimary dark:bg-darkPrimary shadow-header dark:shadow-dark px-4 sm:px-6 tracking-wide ${isPersian ? "rtl" : "ltr"}`}>
        <div className="flex-center gap-x-2">
          <div className="w-13 sm:w-15 h-13 sm:h-15 rounded-full overflow-hidden dark:opacity-60">
            <img src="/images/weather.png" alt="" />
          </div>
          <span className="hidden sm:block text-[11px] sm:text-sm text-darkText dark:text-lightText font-Roboto-light sm:font-Roboto-regular tracking-wide xl:pr-1 text-nowrap">
            {t("navbar.weather_dashboard")}
          </span>
        </div>
        <div className="flex-center">
          <div
            ref={wrapperRef}
            className={`relative h-8 sm:h-10 mx-4 sm:mx-5 sm:w-[295px] flex items-center justify-between rounded-sm border ${
              showSuggestions ? "border-active-blue/50" : "border-slate-400/50"
            } ${isPersian && "rtl"}`}
          >
            <span
              className={`hidden xs:block absolute -top-[9px] text-xs font-Roboto-light sm:font-Roboto-regular dark:bg-darkPrimary bg-lightPrimary px-[3px] tracking-wide ${
                showSuggestions
                  ? "text-active-blue"
                  : "dark:text-slate-400 text-zinc-500"
              } ${isPersian ? "right-3" : "left-3"}`}
            >
              {t("navbar.searchـyourـlocation")}
            </span>
            <input
              type="text"
              name=""
              id=""
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full h-full text-xs sm:text-base mb-0.5 ml-[3px] bg-transparent font-Roboto-regular px-2 dark:text-lightText outline-none xs:placeholder:text-transparent"
              placeholder={t("navbar.searchـyourـlocation")}
              onFocus={() => setShowSuggestions(true)}
              onBlur={() => setShowSuggestions(false)}
            />
            <span
              onClick={() => setShowSuggestions(!showSuggestions)}
              className={`w-6 h-6 flex-center mx-2 sm:mx-[13px] text-zinc-500 text-xl cursor-pointer ${
                showSuggestions && "rotate-180"
              }`}
            >
              <IoMdArrowDropdown />
            </span>

            {showSuggestions && suggestions.length > 0 && (
              <ul className="absolute z-10 top-10 -left-0.5 -right-0.5 rounded-sm dark:text-lightText dark:bg-box-dark bg-white py-3 px-4 shadow-costum space-y-2.5">
                {suggestions.map((city) => (
                  <li
                    key={`${city.lat}-${city.lon}`}
                    className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 cursor-pointer"
                    onMouseDown={() => handleSelectCity(city)}
                  >
                    {city.name}, {city.country}
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div
            className={`flex-center sm:h-10 sm:w-10 sm:border rounded-lg cursor-pointer text-xl ${
              openSetting
                ? "border-active-blue/50 text-active-blue bg-active-blue/5"
                : "border-slate-400/50 text-slate-400"
            }`}
            onClick={() => setOpenSetting(!openSetting)}
          >
            <IoSettingsOutline />
          </div>
        </div>
      </header>
      {openSetting && (
        <div
          ref={settingsRef}
          className={`${
            isPersian ? "left-0 ml-[25px] rtl" : "right-0 mr-[25px] ltr"
          } absolute w-[220px] -mt-2.5 z-10 border border-slate-400/40 dark:border-slate-400/20 backdrop-blur-xs bg-sky-200/10 text-slate-800 dark:text-lightText dark:bg-sky-300/5 rounded-lg px-4 py-3.5 font-Roboto-regular `}
        >
          <div className="mb-4.5">
            <div className="flex justify-between">
            <span className="tracking-wide">
              {t("navbar.mode")}
            </span>
            <span onClick={() => setOpenSetting(false)} className="text-slate-500 cursor-pointer"><HiX/></span>
            </div>
            <div className="flex h-[33px] mt-[7px] *:text-[14px] *:tracking-wide ltr">
              <span
                className="flex-center gap-x-1.5 w-full text-active-blue dark:text-lightText cursor-pointer border border-active-blue dark:border-slate-300/25 rounded-l-sm border-r-0 pb-0.5"
                onClick={() => lightModeHandler()}
              >
                <IoSunnyOutline />
                {t("navbar.light")}
              </span>
              <span className="h-full w-0.5 bg-active-blue/80 dark:bg-zinc-400"></span>
              <span
                className="flex-center gap-x-1.5 w-full text-slate-500 dark:text-darkText dark:bg-lightPrimary/80 cursor-pointer border border-slate-400 rounded-r-sm border-l-0 pb-0.5"
                onClick={() => darkModeHandler()}
              >
                <IoMoonOutline />
                {t("navbar.dark")}
              </span>
            </div>
          </div>

          <span className="block w-full h-px bg-slate-400/60"></span>

          <div className="mb-4.5 mt-3">
            <span className="tracking-wide">
              {t("navbar.language")}
            </span>
            <div className="flex h-[33px] mt-[7px] *:text-[14px] *:tracking-wide ltr">
              <span
                onClick={() => i18n.changeLanguage("en")}
                className={`flex-center gap-x-2 w-full cursor-pointer border dark:border-slate-300/25 rounded-l-sm border-r-0 ${
                  isPersian
                    ? "border-slate-400 text-slate-500 dark:text-lightText"
                    : "text-active-blue border-active-blue dark:text-darkText dark:bg-lightPrimary/80"
                }`}
              >
                En
              </span>
              <span className="h-full w-0.5 bg-active-blue dark:bg-zinc-400"></span>
              <span
                onClick={() => i18n.changeLanguage("fa")}
                className={`flex-center gap-x-2 w-full cursor-pointer border dark:border-slate-300/25 rounded-r-sm border-l-0 ${
                  isPersian
                    ? "text-active-blue border-active-blue dark:text-darkText dark:bg-lightPrimary/80"
                    : "border-slate-400 text-slate-500 dark:text-lightText"
                }`}
              >
                Fa
              </span>
            </div>
          </div>
          <span className="block w-full h-px bg-slate-400/60"></span>
          <Link
            to={"/Login"}
            className="flex items-center w-max  text-black dark:text-lightText ml-[2px] mt-3 gap-x-2 tracking-wide"
          >
            <RxExit className="text-lg" />
            <span
              className={`text-slate-800 dark:text-lightText ${isPersian && "mb-1 -mt-1"}`}
            >
              {t("navbar.exit")}
            </span>
          </Link>
        </div>
      )}
    </>
  );
};

export default Navbar;
