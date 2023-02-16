import React from 'react';

import MonthCard from './MonthCard';
import { calendarArr } from '../../assets/data';

const CalendarCard = ({ styles }) => {
  return (
    <div className={styles.card}>
      {calendarArr &&
        calendarArr.map((obj, idx) => (
          <MonthCard
            key={idx}
            days={obj.arr}
            month={obj.month}
            icon={obj.icon}
            pencil={obj.pencil}
          />
        ))}
    </div>
  );
};

export default CalendarCard;
