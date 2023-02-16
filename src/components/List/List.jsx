import React from 'react';
import styles from './List.module.scss';

import ListItems from './ListItems';
import SearchIcon from '../../assets/img/Search.svg';
import close from '../../assets/img/Close.svg';

const List = () => {
  const [isSearchOpen, setIsSearchOpen] = React.useState(false);
  return (
    <div className={styles.wrapper}>
      {!isSearchOpen && <ListItems styles={styles} />}
      <div className={isSearchOpen ? styles.searchFull : styles.search}>
        <img src={SearchIcon} alt="search-icon" onClick={() => setIsSearchOpen(true)} />
        {isSearchOpen && (
          <>
            <input type="text" className={styles.searchInput} />
            <div className={styles.searchImgWrap} onClick={() => setIsSearchOpen(false)}>
              <img src={close} alt="closebtn" />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default List;
