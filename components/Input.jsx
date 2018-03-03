import React from 'react';

const Input = (props) => (
  <input
    type={props.inputType}
    className="form-control"
    placeholder={props.inputPlaceHolder}
  />
);

export default Input;
