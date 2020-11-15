import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../actions/auth';
import PropTypes from 'prop-types';

const Navbar = ({ logout, auth }) => {
  const { isAuthenticated, loading } = auth;

  const guestLinks = (
    <Fragment>
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
        <Link to="/posts">Posts</Link>
      </li>
      <li>
        <Link to="/dashboard">
          <i className="fa fa-user"></i>{' '}
          <span className="hide-sm">Dashboard</span>
        </Link>
      </li>

      <li>
        <Link onClick={() => logout()} to="/">
          <i className="fa fa-sign-out"></i>
          <span className="hide-sm"> Logout</span>{' '}
        </Link>
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
      <ul>
        <li>
          <Link to="/profiles">Developers</Link>
        </li>
        {!loading && (isAuthenticated ? authLinks : guestLinks)}
      </ul>
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
