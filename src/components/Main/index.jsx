import React from 'react';
import style from './style.module.scss';

import Header from '../Header';
import Calendar from '../Calendar';
import Category from '../Category';

const Main = () => {
  return (
    <div className={style.wrapper}>
      <Header style={style} />
      <Category />
      <Calendar />
    </div>
  );
};

export default Main;
