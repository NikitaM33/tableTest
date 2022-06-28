import React from 'react';
import { Link } from 'react-router-dom';

import styles from './TypeAuthor.module.scss';

const TypeAuthor = ({ text }) => {
    const taskName = text.split(' ').slice(0, -3).join(' ');
    const taskAuthor = text.split(' ').slice(-3).join(' ');

    return (
        <Link to="/" className={styles.link}>
            <p className={styles.task}>{taskName}</p>
            <span className={styles.author}>{`${taskAuthor}`}</span>
        </Link>
    )
}

export default TypeAuthor;