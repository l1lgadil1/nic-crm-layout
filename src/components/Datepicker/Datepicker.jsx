import React from 'react';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import styles from './styles.module.scss';

const Datepicker = () => {
  const [startDate, setStartDate] = React.useState(new Date());
  const [endDate, setEndDate] = React.useState(new Date());

  const [isShown, setIsShown] = React.useState(false);

  return (
    <div className={styles.wrapper}>
      <span className={styles.p} onClick={() => setIsShown((prev) => !prev)}>
        Период
      </span>
      <span>
        {startDate.toLocaleDateString()}:{endDate.toLocaleDateString()}
      </span>
      {isShown ? (
        <div className={styles.separate}>
          <DatePicker
            className={styles.datepicker}
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            selectsStart
            startDate={startDate}
            endDate={endDate}
            dateFormat="MM/yyyy"
            showMonthYearPicker
          />
          :
          <DatePicker
            className={styles.datepicker}
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            selectsEnd
            startDate={startDate}
            endDate={endDate}
            dateFormat="MM/yyyy"
            showMonthYearPicker
          />
        </div>
      ) : null}
    </div>
  );
};

export default Datepicker;
