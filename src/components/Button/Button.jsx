import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import styles from './Button.module.css';
import { useUpdCommentMutation } from '../../redux/commentApi';

export const Button = ({ children, counter, role = 'thumbsUp', id }) => {
  const [isVote, setIsVote] = useState(false);
  const variants = {
    [styles.thumbsUp]: role === 'thumbsUp',
    [styles.thumbsDown]: role === 'thumbsDown',
  };

  const [updComment] = useUpdCommentMutation()
  const onBtnHandleClick = async () => {
    await updComment({ id, [role]: counter + (isVote ? -1 : 1) }).unwrap()
    setIsVote((p) => !p);
  };

  return (
    <button
      className={classNames(styles.button, variants)}
      type='button'
      counter={counter}
      onClick={onBtnHandleClick}
      id={id}
    >
      {children}

      <span className={styles.counter}>
        <span></span>
        {counter}
      </span>
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  counter: PropTypes.number.isRequired,
  role: PropTypes.string,
  id: PropTypes.string.isRequired,
};
