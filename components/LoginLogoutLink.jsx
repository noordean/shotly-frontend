import React from 'react';
import { Link } from 'react-router-dom';

const LoginLogoutLink = (props) => (
  <Link to={props.path} className={props.linkClass}>
    {props.text}
  </Link>
);

export default LoginLogoutLink;
