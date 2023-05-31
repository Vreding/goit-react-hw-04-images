import React from 'react';
import s from './Button.module.css';

const Button = ({ incrementPage }) => {
  return (
    <div className={s.ButtonWrapper}>
      <button className={s.Button} onClick={incrementPage}>
        Load More
      </button>
    </div>
  );
};

export default Button;
