import React from "react";
import { useTranslation } from "react-i18next";
import { getFormattedDateTime } from "../../Utils/dataService";
import { MdOutlineMailOutline } from "react-icons/md";
import { LuCalendarDays } from "react-icons/lu";

const Footer = (): React.JSX.Element => {
  const { t, i18n } = useTranslation();
  const { dayName, fullDate, time, dayMonth } = getFormattedDateTime();
  const isPersian = i18n.language === "fa";
  return (
    <footer className="flex flex-col lg:flex-row px-6 lg:items-center justify-center lg:justify-between w-full h-26 bg-gradient-to-r dark:from-[#292F45] dark:via-[#3F4861] dark:to-[#151D32] from-[#F3FAFE] via-[#CCDDDD9E] to-[#F3FAFE] text-darkText dark:text-lightText">
      <div className="flex items-center gap-x-3">
        <span className="text-sky-600 dark:text-sky-400">
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
        <span className="mb-1 text-xs lg:text-sm">{t("footer.desc")}</span>
      </div>
      <div className="flex flex-col sm:flex-row items-start pl-16 sm:pl-0 -mt-3.5 sm:-mt-1 gap-x-6 lg:gap-x-11 sm:self-end lg:self-auto">
        <div className="flex-center gap-x-1.5 lg:text-[23px]">
          <MdOutlineMailOutline />
          <a
            href="mailto:Ali81forDev@gmail.com"
            className="text-xs lg:text-sm mb-1"
          >
            {t("footer.contact_us")} : Ali81forDev@gmail.com
          </a>
        </div>
        <div className="flex-center gap-x-1.5 lg:text-[22px]">
          <LuCalendarDays />
          <div className="flex-center text-xs lg:text-sm mb-1">
            <span className={`tracking-wide ${isPersian && "text-base -mb-1.5"}`}>{time}</span> 
            <span className="mx-1">{dayName}</span>
            <div className="flex-center ltr gap-x-1">
              <span>{fullDate}</span>
              {isPersian && <span>{dayMonth}</span>}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
