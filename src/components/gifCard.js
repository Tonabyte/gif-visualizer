import React from 'react';
import PropTypes from 'prop-types';

const GifCard = ({ id, title, image }) => (
  <div className="card animate__animated animate__bounce">
    <img src={image} alt={title} />
    <p>{title}</p>
  </div>
);

GifCard.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default GifCard;
