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
    <footer className="flex flex-col lg:flex-row mt-25 px-6 lg:items-center justify-center lg:justify-between w-full h-26 bg-gradient-to-r dark:from-[#292F45] dark:via-[#3F4861] dark:to-[#151D32] from-[#F3FAFE] via-[#CCDDDD9E] to-[#F3FAFE] text-darkText dark:text-lightText">
      <div className="flex items-center gap-x-3">
        <img src="/images/svgs/icon-copy-1.png" alt="" />
        <span className="mb-1 text-xs lg:text-sm">
        {t("footer.desc")}
        </span>
      </div>
      <div className="flex flex-col sm:flex-row items-start gap-x-6 lg:gap-x-11 sm:self-end lg:self-auto">
        <div className="flex-center gap-x-1.5 lg:text-[23px]">
          <MdOutlineMailOutline />
          <span className="text-xs lg:text-sm mb-1">
            {t("footer.contact_us")} : info@nadin.ir
          </span>
        </div>
        <div className="flex-center gap-x-1.5 lg:text-[22px]">
          <LuCalendarDays />
          <div className="flex-center text-xs lg:text-sm mb-1">
            <span className="tracking-wide">{time}</span> . 
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