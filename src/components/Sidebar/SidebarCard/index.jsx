import React from 'react';

import styles from './SidebarCard.module.scss';

const index = ({ title, icon }) => {
  return (
    <div className={styles.card}>
      <div className="">{icon}</div>
      <div className="">{title}</div>
    </div>
  );
};

export default index;
