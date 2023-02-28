import React from 'react';
import style from './style.module.scss';

import Main from '../../components/Main';
import Modal from '../../components/Modal';
import Sidebar from '../../components/Sidebar';

export const AppContext = React.createContext();
const Home = () => {
  const [isModalShown, setIsModalShown] = React.useState(false);
  return (
    <AppContext.Provider value={{ isModalShown, setIsModalShown }}>
      <div className={`${style.wrapper} ${isModalShown && style.scrollHidden}`}>
        <Sidebar />
        <Main />
        {isModalShown && <Modal />}
      </div>
    </AppContext.Provider>
  );
};

export default Home;
