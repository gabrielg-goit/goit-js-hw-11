'use strict';

import axios from 'axios';
export { searchImages };
const apiKey = '43947993-90af54b3f7dd1951891b3d341';
async function searchImages(searchQuery, pageNum, perPage) {
  const params = new URLSearchParams({
    key: apiKey,
    orientation: 'horizontal',
    image_type: 'photo',
    safesearch: true,
    per_page: perPage,
    page: pageNum,
    q: searchQuery,
  });

  const response = await axios.get(`https://pixabay.com/api/?${params}`);
  const data = response.data;
  console.log(data);
  return data;
}
