import { useState, useEffect } from 'react';

// Services
import Services from '../services/services';

const useFetchGifs = category => {
  const [state, setState] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {
    Services.fetchGifs(category)
      .then(images => {
        setTimeout(() => {
          setState({
            data: images,
            loading: false,
          })
        }, 2000);
      });
  }, [category]);

  return state;
}

export default useFetchGifs;
