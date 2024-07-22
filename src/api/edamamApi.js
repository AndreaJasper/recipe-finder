import axios from 'axios';

const APP_ID = process.env.REACT_APP_EDAMAM_APP_ID;
const APP_KEY = process.env.REACT_APP_EDAMAM_APP_KEY;
const BASE_URL = 'https://api.edamam.com/search';

export const fetchRecipes = async (query) => {
  console.log('Fetching recipes with:', {
    query,
    app_id: APP_ID,
    app_key: APP_KEY,
  });
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        q: query,
        app_id: APP_ID,
        app_key: APP_KEY,
        from: 0,
        to: 10,
      },
    });
    return response.data.hits;
  } catch (error) {
    console.error('Error fetching recipes:', error);
    return [];
  }
};
