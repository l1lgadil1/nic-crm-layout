import React from 'react';
import style from './style.module.scss';

import CalendarCard from '../CalendarCard';
import { monthsArr } from '../../db';

const Calendar = () => {
  return (
    <div className={style.wrapper}>
      {monthsArr.map((obj, index) => (
        <CalendarCard month={obj.month} key={index} />
      ))}
    </div>
  );
};

export default Calendar;
