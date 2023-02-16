import React from 'react';
import styles from './ButtonPopup.module.scss';

const index = ({ text, text2, icon, title, border, textColor, width }) => {
  return (
    <button
      className={`${styles.button} ${border ? styles.border : ''}`}
      style={{
        width: width && width,

        color: textColor ? textColor : '',
      }}>
      <div className="">
        <span className={styles.title}>{title}</span>
        <span className={styles.text}>{text}</span>
      </div>
      {icon && <img src={icon} alt="icon" />}
    </button>
  );
};

export default index;
