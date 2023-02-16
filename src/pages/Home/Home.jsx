import React from 'react';

import styles from './Home.module.scss';

import Sidebar from '../../components/Sidebar/Sidebar';
import List from '../../components/List/List';
import Header from '../../components/Header';
import Calendar from '../../components/Calendar';

const Home = () => {
  return (
    <div className={styles.wrapper}>
      <Sidebar />
      <div className={styles.rightSide}>
        <Header />
        <List />
        <Calendar />
      </div>
    </div>
  );
};

export default Home;
