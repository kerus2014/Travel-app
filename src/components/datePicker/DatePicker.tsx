import { useMemo, useState } from "react";
import cn from "classnames";
import styles from "./DatePicker.module.scss";
import {
  IDateCellItem,
  IDatePicker,
  daysOfTheWeek,
  getCurrentMonthDays,
  getDaysAmountInMonths,
  getNextMonthDays,
  getPreviousMonthDays,
  months,
} from "./utils/utils";

const DatePicker = (props: IDatePicker) => {
  const { value, handler } = props;
  const [panelYear, setPanelYear] = useState(() => value.getFullYear());
  const [panelMonth, setPanelMonth] = useState(() => value.getMonth());

  const [year, month, day] = useMemo(() => {
    const currentYear = value.getFullYear();
    const currentMonth = value.getMonth();
    const currentDay = value.getDate();

    return [currentYear, currentMonth, currentDay];
  }, [value]);

  const dateCells = useMemo(() => {
    const daysInMonth = getDaysAmountInMonths(panelYear, panelMonth);

    const currentMonthDays = getCurrentMonthDays(
      panelYear,
      panelMonth,
      daysInMonth
    );
    const prevMonthDays = getPreviousMonthDays(panelYear, panelMonth);

    const nextMonthDays = getNextMonthDays(panelYear, panelMonth);

    return [...prevMonthDays, ...currentMonthDays, ...nextMonthDays];
  }, [panelYear, panelMonth]);

  const onDateSelect = (item: IDateCellItem) => {
    handler(new Date(item.year, item.month, item.date));
  };

  const prevYear = () => {
    setPanelYear((year) => year - 1);
  };
  const prevMonth = () => {
    if (panelMonth === 0) {
      setPanelMonth(11);
      setPanelYear((year) => year - 1);
    } else {
      setPanelMonth((prevMonth) => prevMonth - 1);
    }
  };
  const nextMonth = () => {
    if (panelMonth === 11) {
      setPanelMonth(0);
      setPanelYear((year) => year + 1);
    } else {
      setPanelMonth((prevMonth) => prevMonth + 1);
    }
  };
  const nextYear = () => {
    setPanelYear((year) => year + 1);
  };
  return (
    <div>
      <div>
        {panelYear}
        {months[panelMonth]}
      </div>
      <div>
        {year} {month} {day}
      </div>
      <div>
        <button onClick={prevYear}>PrevYear</button>
        <button onClick={prevMonth}>PrevMonth</button>
        <button onClick={nextMonth}>NextMonth</button>
        <button onClick={nextYear}>NextYear</button>
      </div>
      <div className={styles.datepicker}>
        {daysOfTheWeek.map((days) => {
          return (
            <div key={days} className={styles["datepicker__days"]}>
              {days}
            </div>
          );
        })}
        {dateCells.map((cell, index) => {
          const isCurrentDate =
            cell.year === year && cell.month === month && cell.date === day;
          return (
            <div
              key={index}
              className={cn(styles["datepicker__cell"], {
                [styles["datepicker__cell_active"]]: isCurrentDate,
              })}
              onClick={() => onDateSelect(cell)}
            >
              {cell.date}
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default DatePicker;
