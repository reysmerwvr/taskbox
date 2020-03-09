import React from 'react';
import PropTypes from 'prop-types';

import './Avatar.css';

function Avatar({
  src, alt, status, avatarDisplay,
}) {
  return (
    <span className="badge-root">
      <div
        className="avatar-root avatar-root_circle"
        style={{ display: avatarDisplay }}
      >
        <img alt={alt} src={src} className="avatar-root__img" />
      </div>
      <span className={`badge-root__spam badge-root__spam_dot badge-root__spam_${status}`} />
    </span>
  );
}

Avatar.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  status: PropTypes.oneOf(['active', 'inactive']),
  avatarDisplay: PropTypes.oneOf(['flex', 'none']),
};

Avatar.defaultProps = {
  alt: 'avatar',
  status: 'active',
  avatarDisplay: 'flex',
};

export default Avatar;
