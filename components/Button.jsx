import React from 'react';

export const Button = (props) => (
  <a className={props.btnClass} onClick={props.onClick}>
     {props.text}
  </a>
);

export default Button;