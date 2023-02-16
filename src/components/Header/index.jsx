import React from 'react';

import styles from './Header.module.scss';
import LeftSide from './LeftSide';
import RightSide from './RightSide';
import Modal from '../Modal';

const Header = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const onHandleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  return (
    <div className={styles.wrapper}>
      <LeftSide styles={styles} />
      <RightSide styles={styles} onHandleModal={onHandleModal} />
      {isModalOpen && <Modal onHandleModal={onHandleModal} />}
    </div>
  );
};

export default Header;
