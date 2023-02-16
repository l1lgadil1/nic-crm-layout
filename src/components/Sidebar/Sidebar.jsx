import React from 'react';

import styles from './Sidebar.module.scss';
import logo from '../../assets/img/Logo.svg';

import { sideBarArr } from '../../assets/data';

import SidebarCard from './SidebarCard';

const Sidebar = () => {
  return (
    <div className={styles.wrapper}>
      <div className="">
        <img src={logo} alt="" />
      </div>
      <div className={styles.cards}>
        {sideBarArr.map((item, idx) => (
          <SidebarCard key={idx} {...item} />
        ))}
      </div>
      <div className="">Vihod</div>
    </div>
  );
};

export default Sidebar;
