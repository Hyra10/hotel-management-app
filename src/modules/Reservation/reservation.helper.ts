import { startOfMonth, endOfMonth, format, getDaysInMonth } from 'date-fns';
import memoizeOne from 'memoize-one';

export const getDatesFormatted = (date: Date) => ({
  startDate: startOfMonth(date),
  endDate: endOfMonth(date),
  formatedDateKey: getDateFormatted(date),
})

export const getDateFormatted = (date: Date) => format(date, 'MM/yyyy');

const getDaysArray = (date: Date): number[] => Array.from(
  Array(getDaysInMonth(date)), (_, i) => i + 1
);

export const dateArr = memoizeOne(getDaysArray);