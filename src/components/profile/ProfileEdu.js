import React, { Fragment } from 'react';
import Moment from 'react-moment';
import PropTypes from 'prop-types';

const ProfileEdu = ({ profile: { education } }) => {
  return (
    <div className="profile-exp bg-white p-2">
      {education.length > 0 ? (
        <Fragment>
          <h2 className="text-primary">Education</h2>
          {education.map((edu) => (
            <div key={edu._id}>
              <h3 className="text-dark">{edu.school}</h3>
              <p>
                {' '}
                <Moment format="YYYY/MM/DD">{edu.from}</Moment> -{' '}
                {edu.to === null ? (
                  'Now'
                ) : (
                  <Moment format="YYYY/MM/DD"></Moment>
                )}
              </p>
              <p>
                <strong>Field of study: </strong>
                {edu.fieldofstudy}
              </p>
              <p>
                <strong>Degree: </strong>
                {edu.degree}
                {}
              </p>
              {edu.description && (
                <p>
                  <strong>Description: </strong>
                  {edu.description}
                </p>
              )}
            </div>
          ))}
        </Fragment>
      ) : (
        <Fragment>
          <h2 className="text-primary">Education</h2>
          <h4>No education credentials</h4>
        </Fragment>
      )}
    </div>
  );
};

ProfileEdu.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default ProfileEdu;
