import React from 'react';
import user from '../../assets/img/userSignin.svg';
import notification from '../../assets/img/notification.svg';

const RightSide = ({ styles, onHandleModal }) => {
  return (
    <div className={styles.rightSide}>
      <div className={styles.profile}>
        <img src={user} alt="user" />
        <div>
          <h1>Владимировна И.А.</h1>
          <span>Администратор</span>
        </div>
      </div>
      <div className={styles.notification} onClick={onHandleModal}>
        <img src={notification} alt="notification" />
        <span className={styles.count}> 3</span>
      </div>
    </div>
  );
};

export default RightSide;
