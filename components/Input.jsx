import React from 'react';

const Input = (props) => (
  <input
    name="originalUrl"
    type={props.inputType}
    className="form-control submit-url-input"
    placeholder={props.inputPlaceHolder}
    value={props.originalUrl}
    onChange={props.onChange}
  />
);

export default Input;
