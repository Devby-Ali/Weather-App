import moment from "moment-jalaali"
import "moment/locale/fa"
import i18n from '../i18n';

moment.updateLocale('fa', {
  jMonths: [
    'فروردین', 'اردیبهشت', 'خرداد',
    'تیر', 'مرداد', 'شهریور',
    'مهر', 'آبان', 'آذر',
    'دی', 'بهمن', 'اسفند'
  ],
  jWeekdays: [
    'شنبه', 'یکشنبه', 'دوشنبه',
    'سه‌شنبه', 'چهارشنبه', 'پنجشنبه', 'جمعه'
  ]
});

export const getFormattedDateTime = () => {
  const isPersian = i18n.language === 'fa';
  moment.locale(isPersian ? 'fa' : 'en');
  return {
    dayMonth: toPersianNumbers(moment().jDate()),
    dayName: moment().format('dddd'), 
    fullDate: isPersian
      ? `${toPersianNumbers(moment().jYear())} ${moment().format('jMMMM')}`
      : moment().format('DD MMM, YYYY'),
    time: isPersian
      ? toPersianNumbers(moment().format('HH:mm'))
      : moment().format('h:mm A'),
    formatted: isPersian
      ? `${moment().format('dddd')}\n${moment().jDate()} ${moment().format('jMMMM')} ${moment().jYear()} ${moment().format('HH:mm')}`
      : `${moment().format('dddd')}\n${moment().format('MMM D, YYYY')} ${moment().format('h:mm A')}`
  };
};

export const toPersianNumbers = (num: number | string) => {
  const persianDigits = '۰۱۲۳۴۵۶۷۸۹';
  return num.toString().replace(/\d/g, d => persianDigits[parseInt(d)]);
};

export const formatTemp = (temp: number) => {
  return i18n.language === 'fa' 
    ? toPersianNumbers(Math.round(temp))
    : Math.round(temp);
};

export const getLocalizedMonth = (monthKey: string, isPersian: boolean): string => {
  if (!isPersian) return monthKey;


  const monthIndexMap: { [key: string]: number } = {
    Jan: 0, Feb: 1, Mar: 2, Apr: 3, May: 4, Jun: 5,
    Jul: 6, Aug: 7, Sep: 8, Oct: 9, Nov: 10, Dec: 11
  };

  const index = monthIndexMap[monthKey];
  return moment().jMonth(index).format('jMMMM');
};