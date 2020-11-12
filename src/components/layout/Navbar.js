import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../actions/auth';
import PropTypes from 'prop-types';

const Navbar = ({ logout, auth }) => {
  const { user, isAuthenticated, loading } = auth;

  const guestLinks = (
    <Fragment>
      <li>
        <a href="profiles.html">Developers</a>
      </li>
      <li>
        <Link to="/register">Register</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
    </Fragment>
  );

  const authLinks = (
    <Fragment>
      <li>
        <p>Hello, {user && user.name}</p>
      </li>
      <li>
        <a onClick={logout} href="#!">
          <i className="fa fa-sign-out"></i>
          <span className="hide-sm"> Logout</span>{' '}
        </a>
      </li>
    </Fragment>
  );

  return (
    <nav className="navbar bg-dark">
      <h1>
        <Link to="/">
          <i className="fa fa-code"></i> DevConnector
        </Link>
      </h1>
      <ul>{!loading && (isAuthenticated ? authLinks : guestLinks)}</ul>
    </nav>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

Navbar.propTypes = {
  auth: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired,
};
export default connect(mapStateToProps, { logout })(Navbar);
