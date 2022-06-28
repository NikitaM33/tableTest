import React from 'react';
import { Link } from 'react-router-dom';

import styles from './NumberData.module.scss';

const NumberData = ({ text }) => {
  const string = text.split(' ');
  const [number, createtDate, createdTime] = string;

  return (
    <Link to="/" className={styles.link}>
      <p className={styles.number}>№{number}</p>
      <span className={styles.created}>{`${createtDate} ${createdTime}`}</span>
    </Link>
  )
}

export default NumberData;