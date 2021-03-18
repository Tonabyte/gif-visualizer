import React from 'react';

const GifCard = ({ id, title, image }) => (
  <div className="card animate__animated animate__bounce">
    <img src={image} alt={title} />
    <p>{title}</p>
  </div>
);

export default GifCard;
