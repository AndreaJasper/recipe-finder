import axios from 'axios';

const APP_ID = process.env.REACT_APP_OPEN_WEATHER_MAP_API_ID;
const APP_KEY = process.env.REACT_APP_OPEN_WEATHER_MAP_API_KEY;
const BASE_URL = 'https://api.edamam.com/search';

export const fetchRecipes = async(query) => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        app_id: APP_ID,
        app_key: APP_KEY,
        q: query,
        from: 0,
        to: 10,
      },
    });
    return response.data.hits;
  } catch (error) {
    console.error('Error fetching recipes:', error);
    return[];
  }
};