import React from 'react';

const Button = (props) => (
  <a className={props.btnClass}>
     {props.text}
  </a>
);

export default Button;