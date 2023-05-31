import axios from 'axios';

const API_KEY = '35174443-6d9c66fd3ae2eb6a6d3c5c31a';
axios.defaults.baseURL = 'https://pixabay.com/api/';
axios.defaults.params = { per_page: 12 };

export const getImages = async (query, page) => {
  const { data } = await axios.get(
    `?key=${API_KEY}&q=${query}&image_type=photo&page=${page}`
  );

  return data;
};
