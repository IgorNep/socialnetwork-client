import React, { Fragment } from 'react';
import Moment from 'react-moment';
import PropTypes from 'prop-types';

const ProfileExp = ({ profile: { experience } }) => {
  return (
    <div className="profile-exp bg-white p-2">
      {experience.length > 0 ? (
        <Fragment>
          <h2 className="text-primary">Experience</h2>
          {experience.map((exp) => (
            <div key={exp._id}>
              <h3 className="text-dark">{exp.company}</h3>
              <p>
                {' '}
                <Moment format="YYYY/MM/DD">{exp.from}</Moment> -{' '}
                {exp.to === null ? (
                  'Now'
                ) : (
                  <Moment format="YYYY/MM/DD"></Moment>
                )}
              </p>

              <p>
                <strong>Position: </strong>
                {exp.title}
                {}
              </p>
              {exp.description && (
                <p>
                  <strong>Description: </strong>
                  {exp.description}
                </p>
              )}
            </div>
          ))}
        </Fragment>
      ) : (
        <Fragment>
          <h2 className="text-primary">Experience</h2>
          <h4>No experience credentials</h4>
        </Fragment>
      )}
    </div>
  );
};

ProfileExp.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default ProfileExp;
