import React from "react";
import { useTranslation } from "react-i18next";
import { getFormattedDateTime } from "../../Utils/dataService";
import { MdOutlineMailOutline } from "react-icons/md";
import { LuCalendarDays } from "react-icons/lu";
import { VscGithub } from "react-icons/vsc";

const Footer = (): React.JSX.Element => {
  const { t, i18n } = useTranslation();
  const { dayName, fullDate, time, dayMonth } = getFormattedDateTime();
  const isPersian = i18n.language === "fa";
  return (
    <footer className="flex flex-col sm:flex-row px-6 lg:items-center justify-center sm:justify-between w-full h-26 bg-gradient-to-r dark:from-[#292F45] dark:via-[#3F4861] dark:to-[#151D32] from-[#F3FAFE] via-[#CCDDDD9E] to-[#F3FAFE] text-darkText dark:text-lightText">
      <section className="relative flex items-center gap-x-3">
        <span className="text-sky-600 dark:text-sky-400 mt-px sm:mt-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="55"
            height="55"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path stroke="none" d="M0 0h24v24H0z"></path>
            <path d="M18.316 5H5.684L2.266 9.019a1.09 1.09 0 0 0 .019 1.447L11.999 21l9.715-10.49a1.09 1.09 0 0 0 .024-1.444z"></path>
            <path d="m9 11 3 3 3-3"></path>
          </svg>
        </span>
        <div className="relative tracking-wide flex-center mb-1 text-sm group/info">
          {t("footer.desc")}
          <div className="flex-center rtl text-sky-600 dark:text-sky-400">
            <a
              target="_blank"
              href="https://github.com/Devby-Ali"
              className="hover:tracking-wide tracking-normal font-Inter-regular text-base ml-1 mr-1.5 cursor-pointer text-nowrap"
            >
              DevbyAli
            </a>
            <span className={`text-xl block ml-1`}>
              <VscGithub />
            </span>
          </div>
          <div
            className={`dev_info group-hover/info:dev_info-hover absolute shadow-custom -top-19.5 flex-center w-max gap-x-4 bg-sky-700/15 dark:bg-sky-400/5 backdrop-blur-xs p-2 rounded-full z-50 ${
              isPersian
                ? "-right-14 sm:right-42 pl-5 rounded-br-md"
                : "-left-14 sm:left-47 pr-5 rounded-bl-md"
            }`}
          >
            <div className="size-15 rounded-4xl overflow-hidden">
              <img src="/images/DevbyAli.jpg" alt="" />
            </div>
            <span
              className={`text-nowrap font-Inter-regular ${
                isPersian ? "xs:tracking-wider" : "xs:tracking-wide"
              }`}
            >
              {t("footer.dev_info")}
            </span>
          </div>
        </div>
      </section>

      <section
        className={`flex w-max sm:h-full flex-col sm:flex-row items-start sm:items-center mb-1 sm:mb-0 sm:pl-0 -mt-3.5 sm:-mt-1 gap-x-8 lg:gap-x-11 sm:self-end lg:self-auto text-nowrap ${
          isPersian ? "pr-13" : "pl-13"
        }`}
      >
        <div className="flex-center gap-x-1.5 sm:gap-x-0.5 lg:gap-x-1.5 lg:text-[22px]">
          <LuCalendarDays />
          <div className="flex-center text-xs lg:text-sm mb-1 sm:mb-0">
            <span
              className={`tracking-wide ${isPersian && "text-base -mb-1.5"}`}
            >
              {time}
            </span>
            <span className="mx-1">{dayName}</span>
            <div className="flex-center ltr gap-x-1">
              <span>{fullDate}</span>
              {isPersian && <span>{dayMonth}</span>}
            </div>
          </div>
        </div>

        <div
          className={`flex-center gap-x-1.5 sm:gap-x-1 lg:gap-x-1.5 lg:text-[23px] ${
            isPersian ? "-mr-4" : "-ml-5"
          }`}
        >
          <MdOutlineMailOutline />
          <a
            href="mailto:Ali81forDev@gmail.com"
            className={`text-xs lg:text-sm ${!isPersian && "mb-1"}`}
          >
            {t("footer.contact_us")} : Ali81forDev@gmail.com
          </a>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
