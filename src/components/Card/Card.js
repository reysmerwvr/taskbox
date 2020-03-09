import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';
import Avatar from '../Avatar/Avatar';
import useResize from './useResize';

function Card({
  src, alt, status, title, subtitle, style,
}) {
  const [avatarDisplay] = useResize();
  return (
    <div className="card-root" style={(style) && style}>
      <div className="card-root__avatar">
        <Avatar
          src={src}
          alt={alt}
          status={status}
          avatarDisplay={avatarDisplay}
        />
      </div>
      <div className="card-root__content">
        <span className="card-root__content__spam card-root__content__spam_title">{title}</span>
        <span className="card-root__content__spam card-root__content__spam_subtitle">{subtitle}</span>
      </div>
    </div>
  );
}

Card.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  status: PropTypes.oneOf(['active', 'inactive']),
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  style: PropTypes.shape({
    maxWidth: PropTypes.string,
    maxHeight: PropTypes.string,
  }),
};

export default Card;
