import React from 'react';
import classes from './MyButton.module.css';

const MyButton = ({ children, ...props }) => {
  return (
    <button {...props} type="button" className={classes.myButton}>
      {children}
    </button>
  );
};

export default MyButton;
