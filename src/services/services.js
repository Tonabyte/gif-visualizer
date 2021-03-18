// Configuration
import {
  API_KEY,
  SEARCH_ENDPOINT_URL,
  LANGUAGE,
  LIMIT,
} from '../config/config';

class Services {
  static fetchGifs = async category => {
    const URL = `${SEARCH_ENDPOINT_URL}?api_key=${API_KEY}&lang=${LANGUAGE}&limit=${LIMIT}&q=${category}`;
    const response = await fetch(URL);
    const { data } = await response.json();

    return data.map(gifData => ({
      id: gifData.id,
      title: gifData.title,
      image: gifData.images.downsized_medium.url,
    }));
  };
}

export default Services;
