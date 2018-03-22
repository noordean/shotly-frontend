import React from 'react';

const Input = (props) => (
  <input
    name={props.inputName}
    type={props.inputType}
    className="form-control submit-url-input"
    placeholder={props.inputPlaceHolder}
    value={props.inputValue}
    onChange={props.onChange}
  />
);

export default Input;
