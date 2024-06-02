import axios from 'axios';

const API_KEY = '44067691-76497e8def9c6eb00e23cd4a0';
const BASE_URL = 'https://pixabay.com/api/';

export async function fetchImg(searchQuery, page = 1, perPage = 15) {
  const params = new URLSearchParams({
    key: API_KEY,
    q: searchQuery,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    page: page,
    per_page: perPage,
  });
  try {
    const response = await axios.get(`${BASE_URL}?${params}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
