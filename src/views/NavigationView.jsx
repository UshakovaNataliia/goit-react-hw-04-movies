import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './NavigationView.module.css';

const NavigationView = () => { 
  return (
      <>
          <ul className={styles.ul}>
              <li className={styles.link}>
                <NavLink exact activeClassName={styles.active} className={styles.link} to="/"> Home</NavLink>
              </li>
              <li className={styles.link} >
                <NavLink className={styles.link} activeClassName={styles.active} to="/movies">Movies</NavLink>
              </li>
          </ul>
    </>
)
};

export default NavigationView;