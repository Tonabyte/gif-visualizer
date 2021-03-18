import React from 'react';

import useFetchGifs from '../hooks/useFetchGifs';

// Components
import GifCard from './gifCard';

const Grid = ({ category }) => {

  const { data, loading } = useFetchGifs(category);

  return (
    <>
      <h3>{category}</h3>
      { loading && 'Cargando' }
      <div className="cardGrid">
          {
            data.map(image => (
              <GifCard key={image.id} {...image} />
            ))
          }
      </div>
    </>
    );
};

export default Grid;
