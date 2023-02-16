import React from 'react';

import styles from './Calendar.module.scss';
import CalendarCard from './CalendarCard';

const index = () => {
  return (
    <div className={styles.wrapper}>
      <CalendarCard styles={styles} />
    </div>
  );
};

export default index;
