import React from 'react';
import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <ul className={styles['statistics-list']}>
      <li className={styles['statistics-list-item']}>
        Good: <span>{good}</span>
      </li>
      <li className={styles['statistics-list-item']}>
        Neutral: <span>{neutral}</span>
      </li>
      <li className={styles['statistics-list-item']}>
        Bad: <span>{bad}</span>
      </li>
      <li className={styles['statistics-list-item']}>
        Total: <span>{total}</span>
      </li>
      <li className={styles['statistics-list-item']}>
        Positive Feedback: <span>{positivePercentage}%</span>
      </li>
    </ul>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
