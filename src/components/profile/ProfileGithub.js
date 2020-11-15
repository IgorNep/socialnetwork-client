import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getGithubRepos } from '../../actions/profile';
import Spinner from '../layout/Spinner';

const ProfileGithub = ({
  username,
  getGithubRepos,
  profile: { repos, loading },
}) => {
  useEffect(() => {
    if (username) {
      getGithubRepos(username);
    }
  }, [getGithubRepos, username]);
  return (
    <div className="profile-github">
      {repos && repos.length > 0 && (
        <Fragment>
          <h2 className="text-primary my-1">
            <i className="fa fa-github"></i> Github Repos
          </h2>
          {repos.map((repo) => (
            <div className="repo bg-white p-1 my-1" key={repo.id}>
              <div>
                <h4>
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {repo.name}
                  </a>
                </h4>
                <p>{repo.description}</p>
              </div>
              <div>
                <ul>
                  <li className="badge badge-primary">
                    Stars: {repo.stargazers_count}
                  </li>
                  <li className="badge badge-dark">
                    Watchers: {repo.watchers_count}
                  </li>
                  <li className="badge badge-light">
                    Forks: {repo.forks_count}
                  </li>
                </ul>
              </div>
            </div>
          ))}
        </Fragment>
      )}
    </div>
  );
};

ProfileGithub.propTypes = {
  getGithubRepos: PropTypes.func.isRequired,
  repos: PropTypes.array,
  username: PropTypes.string.isRequired,
};
const mapStateToProps = (state) => ({
  profile: state.profile,
});
export default connect(mapStateToProps, { getGithubRepos })(ProfileGithub);
