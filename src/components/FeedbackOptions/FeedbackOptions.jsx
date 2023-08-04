import React from 'react';
import PropTypes from 'prop-types';
import styles from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ul className={styles['feedback-list']}>
      {options.map(option => {
        let buttonStyleClass;
        switch (option) {
          case 'good':
            buttonStyleClass = styles['feedback-button-green'];
            break;
          case 'neutral':
            buttonStyleClass = styles['feedback-button-yellow'];
            break;
          case 'bad':
            buttonStyleClass = styles['feedback-button-red'];
            break;
          default:
            break;
        }
        return (
          <li key={option} className={styles['feedback-list-item']}>
            <button
              type="button"
              className={`${styles['feedback-button']} ${buttonStyleClass}`}
              onClick={() => onLeaveFeedback(option)}
            >
              {option}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
