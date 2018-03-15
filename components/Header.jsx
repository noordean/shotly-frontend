import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Button from './Button.jsx';
import ContactModal from './ContactModal.jsx';
import LoginLogoutLink from './LoginLogoutLink.jsx';

export class Header extends React.Component {

  render() {
    return (
      <div className="row header-wrapper">
        <div className="col-sm-6">
          <Link to="/" className="header-title">Shotly</Link>
        </div>
        <div className="col-sm-6">
          {
            this.props.userRegistration.isAuthenticated || this.props.userLogin.isAuthenticated ?
            <div className="pull-right header-nav">
              <span>
                <LoginLogoutLink text={"Sign out"} path={"/"} linkClass="btn btn-danger btn-sm" />
              </span>
            </div> :
            <div className="pull-right header-nav">
              <span data-toggle="modal" data-target="#contactModal">Contact</span>
              <span>
                <LoginLogoutLink text={"Sign in"} path={"/signin"} linkClass="btn btn-success btn-sm" />
              </span>
            </div>
          }
        </div>
        <ContactModal />
      </div>
    )
  }
};

const mapStateToProps = state => ({
  userRegistration: state.userRegistration,
  userLogin: state.userLogin
});

export default connect(mapStateToProps)(Header);
