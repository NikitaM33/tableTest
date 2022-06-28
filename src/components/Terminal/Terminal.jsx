import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Terminal.module.scss';

const Terminal = ({ text }) => {
    const accountData = text.split('-');

    return (
        <Link to="/" className={styles.link}>
            <p className={styles.account}>{accountData[0]}</p>
            <span className={styles.terminal}>{accountData[1]}</span>
        </Link>
    )
}

export default Terminal;