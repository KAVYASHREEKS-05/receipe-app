const BASE_URL = 'https://www.themealdb.com/api/json/v1/1';

// Function to fetch recipes based on query
export const fetchRecipes = async (query) => {
  try {
    const response = await fetch(`${BASE_URL}/search.php?s=${query}`);
    const data = await response.json();
    {console.log(data)}
    return data.meals || []; // Return an empty array if no meals are found
  } catch (error) {
    console.error('Error fetching recipes:', error);
    return [];
  }
};

// Function to fetch recipe details by ID
export const fetchRecipeDetails = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/lookup.php?i=${id}`);
    const data = await response.json();
    {console.log(data)}
    return data.meals ? data.meals[0] : {}; // Return the first meal or an empty object if not found
  } catch (error) {
    console.error('Error fetching recipe details:', error);
    return {};
  }
};
