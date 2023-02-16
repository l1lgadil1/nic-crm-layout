import React from 'react';
import styles from './Button.module.scss';

const index = ({ text, icon, bg, border, borderWidth, textColor, width }) => {
  return (
    <button
      className={styles.button}
      style={{
        width: width && width,
        backgroundColor: bg,
        borderWidth: borderWidth ? borderWidth : 0,
        color: textColor ? textColor : '',
        borderColor: border ? border : '',
      }}>
      {icon && <img src={icon} alt="icon" />}
      {text && <span>{text}</span>}
    </button>
  );
};

export default index;
